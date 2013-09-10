class ItemsController < ApplicationController
  before_filter :require_current_user!, :except => [:index, :show]
  before_filter :require_item_owner!, :only => [:edit, :update, :destroy]
  
  def create
    @item = Item.new(params[:item])
    @item.shop_id = current_user.shop.id
    
    if @item.save
      redirect_to item_url(@item)
    else
      flash.now[:errors] = @item.errors.full_messages.first
      render :new
    end
  end
  
  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    
    redirect_to root_url
  end
  
  def edit
    @item = Item.find(params[:id])
  end
  
  def index
    @items = Item.all
    
    respond_to do |format|
      format.json { render 'items.rabl' }
      format.html { render :index }      
    end
  end
  
  def new
    @item = Item.new
  end
  
  def show
    renderer = Redcarpet::Render::HTML.new(:no_intra_emphasis => true, :autolink => true, :hard_wrap => true)
    @markdown = Redcarpet::Markdown.new(renderer)
    
    @item = Item.find(params[:id])
  end
  
  def update
    @item = Item.find(params[:id])
    
    if @item.update_attributes(params[:item])
      redirect_to item_url(@item)
    else
      flash.now[:errors] = @item.errors.full_messages.first
      render :edit
    end
  end
end
