class UsersController < ApplicationController
  before_filter :require_no_current_user!, :only => [:create, :new]
  
  respond_to :json, :only => [:create]

  def create
    @user = User.new(params[:user])

    if @user.save
      self.current_user = @user
      render "user"
    else
      render :json => @user.errors.full_messages.first, :status => 422
    end
  end
  
  def destroy
    @user = User.find(params[:id])
    @user.destroy
    
    redirect_to root_url
  end
  
  def edit
    if current_user.id == params[:id].to_i || current_user.username == params[:id]
      @user = User.find(params[:id])
      render :edit
    else
      redirect_to root_url
    end
  end
  
  def favorites
    @user = User.find(params[:id])
    @shop_show = params[:shop]
    @items = @user.favorite_items.page params[:page]
    @shops = @user.favorite_shops.page params[:page]
  end

  def show
    @user = User.find(params[:id])
    @date = @user.created_at
  end
  
  def update
    @user = User.find(params[:id])
    
    if @user.update_attributes(params[:user])
      redirect_to user_url(@user)
    else
      flash.now[:errors] = @user.errors.full_messages.first
      render :edit
    end
  end
end
