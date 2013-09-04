class ShopFavoritesController < ApplicationController
  respond_to :json
  
  def create
    @favorite = ShopFavorite.new(:user_id => current_user.id,
                                 :shop_id => params[:shop_id])
    if @favorite.save
      render :json => @favorite
    else
      render :json => @favorite.errors, :status => 422
    end
  end
  
  def destroy
    @favorite = ShopFavorite.find_by_user_id_and_shop_id(
                  current_user.id, params[:shop_id])
    @favorite.destroy

    render :json => @favorite
  end
end
