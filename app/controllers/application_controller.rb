
class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  # runs any method that i specify b4 an action runs
  # before_action :authorized_user


  private

  def render_unprocessable_entity(invalid)
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end 

  def render_not_found(error)
      # byebug
      render json: {error: "#{error.model} Not Found"}, status: :not_found
  end 
end