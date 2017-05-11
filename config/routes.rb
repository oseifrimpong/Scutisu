Rails.application.routes.draw do


  resources :books, only: [:index, :show]
  resources :book_requests
  resources :authors

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  #get 'home/index'
  root to: "home#index"
  #for events
  resources :events, only: [:index, :show] do 
  	resources :participations
  end


end
