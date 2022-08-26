
Rails.application.routes.draw do
  resources :parks
  # resources :passes

  resources :users, only:[:create, :show] do
    #nested for passes. user to see own passes
    resources :passes, only: [:show, :index]
  end

# users
  get '/users', to: 'users#index'
  get '/signup', to: 'users#create'

  # authenticate user initially
  get '/authenticated_user', to: 'users#show'

  
#logging in and logging out
  post "/login", to: "sessions#login"
  delete '/logout', to: 'sessions#destroy'


  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end