module SessionsHelper
  def current_user
    User.find_by_session_token(session[:session_token])
  end

  def current_user=(user)
    @current_user = user
    session[:session_token] = user.session_token
  end
  
  def in_cart?(item)
    session[:cart_item_ids].include?(item.id.to_s)
  end

  def logout_current_user!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_current_user!
    redirect_to new_session_url if current_user.nil?
  end

  def require_no_current_user!
    redirect_to root_url unless current_user.nil?
  end
  
  def require_item_owner!
    @item = Item.find(params[:id])
    redirect_to root_url unless (current_user.id == @item.owner.id)
  end
  
  def require_shop_owner!
    @shop = Shop.find(params[:id])
    redirect_to root_url unless (current_user.id == @shop.owner_id)
  end
end
