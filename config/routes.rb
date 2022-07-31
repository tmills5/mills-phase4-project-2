
Rails.application.routes.draw do
  resources :reviews
  resources :parks
  resources :users, only:[:create]
  get '/users', to: 'users#index'
  get '/signup', to: 'users#create'
  get '/authorized_user', to: 'users#show'

  

  #logging in and logging out
  post "/login", to: "sessions#login"
  delete '/logout', to: 'sessions#destroy'


  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end