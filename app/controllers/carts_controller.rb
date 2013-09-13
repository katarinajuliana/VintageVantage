class CartsController < ApplicationController
  respond_to :json, :only => [:update]
  
  def show
    if session[:cart_item_ids]
      @shops = {}
      @items = session[:cart_item_ids].map { |id| Item.find(id) }
      
      @items.each do |item|
        if @shops[item.shop]
          @shops[item.shop] << item
        else
          @shops[item.shop] = [item]
        end
      end
    else
      @shops = {}
      @items = []
    end
  end
  
  def update
    @items = []
    
    session[:cart_item_ids].each do |id|
      item = Item.find(id)
      
      if item.shop.id == params[:shop_id].to_i  
        session[:cart_item_ids].delete(id)
        @items << item
      end
    end
    
    begin
      ActiveRecord::Base.transaction do
        @items.each do |item| 
          item.update_attributes(:sold => true)
        end
        
        raise "invalid" unless @items.all? { |item| item.valid? }
      end
    rescue
      render :json => @items.map(&:errors).flatten, :status => 422
    else
      render :json => true, :status => 200
    end
  end
end
