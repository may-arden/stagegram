Rails.application.routes.draw do
  resources :opera_collections
  resources :collections
  resources :operas
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
