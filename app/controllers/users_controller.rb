class UsersController < ApplicationController
    wrap_parameters format: []

    def index
        render json: User.all
    end

    def create 
         # create! exceptions will be handled by the rescue_from ActiveRecord::RecordInvalid code
        user = User.create!(user_params)
        session[:current_user] = user.id
        render json: user, status: :created
    end

    def show
        # using session to find user in question. sessions are in user browser
        # if session for user currently happening. set our user to that user and render json
        current_user = User.find_by(id: session[:current_user])
        render json: current_user
    end

  
    private
  
    def user_params
        params.permit( :name, :password)
    end 
end