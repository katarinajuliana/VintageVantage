class CartsController < ApplicationController
  def show
    cart = Cart.find_by_user_id(current_user)
    
    :cookies[:cart_items].each do |item|
      cart.cart_items << item
    end
    
    @items = cart.cart_items
  end
end
