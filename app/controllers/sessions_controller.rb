
class SessionsController < ApplicationController
  #skipping the create in sessions bc if user has never logged in b4 (creating new user) then no reason to authorize
  # skip_before_action :authorized_user, only: [:create, :destroy]

    def login
      # find user by username
      user = User.find_by!(name:params[:username])
      # authenticate
      if user&.authenticate(params[:password])
          session[:current_user] = user.id
          render json: user, status: :ok
          # byebug
      else 
          render json: { error: "Invalid Username or Password" }, status: :unauthorized
      end 
    end
  
    def destroy
      session.delete :current_user
      head :no_content
      # byebug
    end
  
  end