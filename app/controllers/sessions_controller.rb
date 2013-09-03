class SessionsController < ApplicationController
  before_filter :require_no_current_user!, :only => [:create, :new]
  
  def create
    user = User.find_by_username(params[:user][:username])

    if user && user.password = params[:user][:username]
      self.current_user = user
      redirect_to root_url
    else
      flash[:errors].now = "Invalid username or password."
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