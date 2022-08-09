
Rails.application.routes.draw do
  resources :passes
  resources :parks, only: [:index, :show, :create, :update, :destroy]
  resources :users, only:[:create, :show]

# users
  get '/users', to: 'users#index'
  get '/signup', to: 'users#create'
  # authenticate user initially
  get '/authorized_user', to: 'users#show'

# # parks
  get '/parks', to: 'parks#index'
  get '/parks/:id', to: 'parks#show'
  

# #passes
  get '/passes', to: 'passes#index'
  get '/passes', to: 'passes#create'
  
  
#logging in and logging out
  post "/login", to: "sessions#login"
  delete '/logout', to: 'sessions#destroy'


  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end