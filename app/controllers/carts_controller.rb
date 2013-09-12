class CartsController < ApplicationController
  respond_to :json, :only => [:update]
  
  def show
    if session[:cart_item_ids]
      @items = session[:cart_item_ids].map { |id| Item.find(id) }
    else
      @items = []
    end
  end
  
  def update
    @item = Item.find(params[:item_id])
    
    @item.sold = true
    
    render :json => @item
  end
end
