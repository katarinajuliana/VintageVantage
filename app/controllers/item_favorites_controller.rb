class ItemFavoritesController < ApplicationController
  respond_to :json
  
  def create
    @favorite = ItemFavorite.new(:user_id => current_user.id,
                                 :item_id => params[:item_id])
    if @favorite.save
      render :json => @favorite
    else
      render :json => @favorite.errors, :status => 422
    end
  end
  
  def destroy
    @favorite = ItemFavorite.find_by_user_id_and_item_id(
                               current_user.id, params[:item_id])
    @favorite.destroy
    
    render :json => @favorite
  end
end
