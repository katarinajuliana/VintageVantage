VintageVantage::Application.routes.draw do
  resource :session, :only => [:create, :destroy]
  
  resources :items, :except => [:index] do
    resource :item_favorite, :only => [:create, :destroy]
  end
  
  resources :shops, :except => [:index] do
    resource :shop_favorite, :only => [:create, :destroy]
  end
  
  resources :users, :except => [:new, :index] do
    get 'favorites', :on => :member
  end
  
  
  match "/auth/:provider/callback" => "sessions#create_fbook"
  
  match "/auth/failure", to: redirect("/")
  
  root to: "items#index"
end
