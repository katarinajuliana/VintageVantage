class SessionsController < ApplicationController
  before_filter :require_no_current_user!, :only => [:create, :new]
  
  respond_to :json, :only => [:create]
  
  def create
    @user = User.find_by_email(params[:user][:email])

    if @user && (@user.is_password?(params[:user][:password]))
      self.current_user = @user
      
      render 'users/user'
    else
      render :text => "Invalid email or password", :status => 422
    end
  end
  
  def create_fbook
    @user = User.find_or_create_by_email(auth_hash)
    
    self.current_user = @user
    redirect_to root_url
  end

  def destroy
    logout_current_user!
    redirect_to root_url
  end
  
  protected
  def auth_hash
    {:email => request.env['omniauth.auth']['info']['email'],
     :username => request.env['omniauth.auth']['info']['email'],
     :location => request.env['omniauth.auth']['info']['location'],
     :password => request.env['omniauth.auth']['credentials']['token'],
     :fbook_token => request.env['omniauth.auth']['credentials']['token']}
  end
end