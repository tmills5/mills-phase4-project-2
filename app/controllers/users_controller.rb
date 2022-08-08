class UsersController < ApplicationController
    wrap_parameters format: []

    def index
      users = User.all
      render json: users
    end
  
    def create 
        user = User.create!(user_params)
        render json: user, status: :created
        session[:user_id] = user.id
    end

    def show
        current_user = User.find(session[:user_id])
        render json: current_user
    end
  
    private
  
    def user_params
        params.permit( :name, :password)
    end 
end