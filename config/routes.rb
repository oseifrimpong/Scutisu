Rails.application.routes.draw do
  

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  #get 'home/index'

  root to: "home#index"

  #for events
  resources :events do 
  	resources :participations
  end

  #for books
  resources :books

end
