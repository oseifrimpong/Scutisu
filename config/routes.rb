Rails.application.routes.draw do

  get 'home/index'

  devise_for :users
  devise_scope :user do
    authenticated :user do
      root 'home#index', as: :authenticated_root
    end
    unauthenticated do
      root 'devise/registrations#new', as: :unauthenticated_root
    end
  end

end
