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
    end
  end
  
  def update
    @item = Item.find(params[:item_id])
    
    @item.sold = true
    
    render :json => @item
  end
end
