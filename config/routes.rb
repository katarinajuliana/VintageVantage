VintageVantage::Application.routes.draw do
  resource :session, :only => [:new, :create, :destroy]
  resources :users, :except => [:index]
  resources :items, :except => [:index]
  resources :shops, :except => [:index]
  
  root to: "items#index"
end
