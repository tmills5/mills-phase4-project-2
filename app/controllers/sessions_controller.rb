
class SessionsController < ApplicationController
    def login
      user = User.find_by!(name:params[:username])
      if user&.authenticate(params[:password])
          
          session[:user_id] = user.id
          render json: { user: "Welocome to Park.me!!" }, status: :ok 
          byebug
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