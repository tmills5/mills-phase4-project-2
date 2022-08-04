
class SessionsController < ApplicationController
  #skipping the create in sessions bc if user has never logged in b4 (creating new user) then no reason to authorize
  skip_before_action :authorized_user, only: [:create, :destroy]

    def create
      user = User.find_by!(name:params[:username])
      if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: { user: "Welcome to ParkIt!!" }, status: :created
          # byebug
      else 
          render json: { error: "Invalid Username or Password" }, status: :unprocessable_entity
      end 
    end
  
    def destroy
      session.delete :user_id
      head :no_content
      # byebug
    end
  
  
  end