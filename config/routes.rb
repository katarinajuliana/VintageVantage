VintageVantage::Application.routes.draw do
  resources :items, :except => [:index]
  
  root :to => "items#index"
end
