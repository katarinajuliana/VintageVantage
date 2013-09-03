class SessionsController < ApplicationController
  before_filter :require_no_current_user!, :only => [:create, :new]
  
  def create
    user = User.find_by_username(params[:user][:username])

    if user && (user.is_password?(params[:user][:password]))
      self.current_user = user
      redirect_to root_url
    else
      render :new
    end
  end

  def destroy
    logout_current_user!
    redirect_to new_session_url
  end

  def new
  end
end