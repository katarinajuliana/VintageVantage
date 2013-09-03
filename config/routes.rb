VintageVantage::Application.routes.draw do
  resources :items, :except => [:index]
  resources :shops, :except => [:index]
  
  root to: "items#index"
end
