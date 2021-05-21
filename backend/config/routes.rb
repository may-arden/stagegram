Rails.application.routes.draw do
  resources :opera_collections, only: [:index, :create, :new]
  resources :collections, only: [:index, :create, :new]
  resources :operas, only: [:index, :create, :show]
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
