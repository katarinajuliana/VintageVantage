class CartsController < ApplicationController
  def show
    @items = session[:cart_item_ids].map { |id| Item.find(id) }
  end
  
  def update
    # checkout
  end
end
