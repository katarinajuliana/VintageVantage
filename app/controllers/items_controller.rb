class ItemsController < ApplicationController
  before_filter :require_current_user!, :except => [:index, :show]
  before_filter :require_item_owner!, :only => [:edit, :update, :destroy]
  
  def index
  end
  
  def show
    @item = Item.find(params[:id])
  end
  
  def new
    @item = Item.new
  end
  
  def create
    @item = Item.new(params[:item])
    
    if @item.save
      render :json => @item
    else
      render :json => @item.errors
    end
  end
  
  def edit
    @item = Item.find(params[:id])
  end
  
  def update
    @item = Item.find(params[:id])
    
    if @item.update_attributes(params[:item])
      render :json => @item
    else
      render :json => @item.errors
    end
  end
  
  def destroy
    @item = Item.find(params[:id])
    @item.destroy!
    
    redirect_to root_url
  end
end
