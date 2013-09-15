class CartItemsController < ApplicationController
  respond_to :json
  
  def create
    session[:cart_item_ids] ||= []
    
    if Item.find(params[:item_id]).sold || session[:cart_item_ids].include?(params[:item_id])
      render :json => false, :status => 422
      return
    end
    
    session[:cart_item_ids] << params[:item_id]
    
    render :json => Item.find(params[:item_id])
  end
  
  def destroy
    session[:cart_item_ids].delete_if { |id| id == (params[:item_id]) }
    
    render :json => Item.find(params[:item_id])
  end
end
