class UsersController < ApplicationController
  before_filter :require_no_current_user!, :only => [:create, :new]

  def create
    @user = User.new(params[:user])

    if @user.save
      self.current_user = @user
      redirect_to root_url
    else
      render :new
    end
  end
  
  def destroy
    @user = User.find(params[:id])
    @user.destroy
    
    redirect_to root_url
  end
  
  def edit
    if current_user.id == params[:id].to_i
      @user = User.find(params[:id])
      render :edit
    else
      redirect_to root_url
    end
  end
  
  def favorites
    @user = User.find(params[:id])
    @items = @user.favorite_items
    @shops = @user.favorite_shops
  end

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
    @date = @user.created_at
  end
  
  def update
    @user = User.find(params[:id])
    
    unless current_user.id == params[:id].to_i
      redirect_to root_url
    end
    
    if @user.update_attributes(params[:user])
      redirect_to user_url(@user)
    else
      render :edit
    end
  end
end
