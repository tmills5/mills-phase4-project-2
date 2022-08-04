
class ApplicationController < ActionController::API
  include ActionController::Cookies
  # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  # runs any method that i specify b4 an action runs
  before_action :authorized_user


  def authorized_user
    render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
      # if our session includes the right id then we'll send the right thing else we'll send the error
    # end
  end


  private

  # def render_unprocessable_entity(invalid)
  #     render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  # end 

  # def render_not_found(error)
  #     # byebug
  #     render json: {error: "#{error.model} Not Found"}, status: :not_found
  # end 
end