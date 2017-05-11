Rails.application.routes.draw do
  

  devise_for :admins
  resources :books, only: [:index, :show]
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  #get 'home/index'

  root to: "home#index"

end
