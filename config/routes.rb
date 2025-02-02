
Rails.application.routes.draw do
  get '/parks', to: 'parks#get_parks'
  get '/parks/id', to: 'parks#show'
  resources :parks


  post '/activities', to: 'parks#activities'

  resources :users, only:[:create, :show] do
    #nested for passes. user to see own passes
    resources :passes, only: [:show, :index]
  end
get '/passes', to: 'passes#index'

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