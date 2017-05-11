Rails.application.routes.draw do
  

  resources :book_requests
  resources :authors
  resources :books
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  #get 'home/index'

  root to: "home#index"

end
