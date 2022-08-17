Rails.application.routes.draw do

  resources :jobs, only: :create 
  resources :locations, only: :index 
  resources :tradesmen
  
  root 'pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
