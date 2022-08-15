Rails.application.routes.draw do

  namespace :api do 
    namespace :v1 do
      resources :stocks, exept: [:show, :new, :edit]
    end    
  end
  
  root 'pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
