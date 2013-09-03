class ShopsController < ApplicationController
  before_filter :require_current_user!, :except => [:show]
  before_filter :require_shop_owner!, :only => [:edit, :update, :destroy]
  
  def create
    @shop = Shop.new(params[:shop])
    @shop.owner_id = current_user.id
    
    if @shop.save
      redirect_to shop_url(@shop)
    else
      render :new
    end
  end
  
  def destroy
    @shop = Shop.find(params[:id])
    @shop.destroy
    
    redirect_to root_url
  end
  
  def edit
    @shop = Shop.find(params[:id])
  end
  
  def new
    @shop = Shop.new
  end
  
  def show
    @shop = Shop.find(params[:id])
  end
  
  def update
    @shop = Shop.find(params[:id])
    
    if @shop.update_attributes(params[:shop])
      redirect_to shop_url(@shop)
    else
      render :edit
    end
  end
end
