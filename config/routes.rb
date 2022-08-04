
Rails.application.routes.draw do
  resources :reviews
  resources :parks, only: [:index, :show]
  resources :users, only:[:create, :show]

  get '/users', to: 'users#index'
  get '/signup', to: 'users#create'
  # get '/authorized_user', to: 'users#show'
  get '/parks', to: 'parks#index'
  get '/parks/:id', to: 'parks#show'
  get '/auth', to: 'users#show'
  
  #logging in and logging out
  post "/login", to: "sessions#create"
  delete '/logout', to: 'sessions#destroy'


  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end