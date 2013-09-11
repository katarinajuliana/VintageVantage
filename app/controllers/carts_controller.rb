class CartsController < ApplicationController
  def show
    if session[:cart_item_ids]
      @items = session[:cart_item_ids].map { |id| Item.find(id) }
    else
      @items = []
    end
  end
  
  def update
    # checkout
  end
end
