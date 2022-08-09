class ParksController < ApplicationController
    wrap_parameters format: []
    before_action :authorize

    def index
        # byebug
        parks = Park.all
        render json: parks
    end

    def create
        park = Park.create!(park_params)
        render json: park, status: :created
    end

    def show
        park = Park.find_by(id: params[:id])
        if park
        render json: park
        else
        render json: {error: "Park Not Found"}, status: :not_found
        end
    end

    def destroy
        park = Park.find_by!(id: params[:id])
        if park
            park.destroy
            head :no_content
        else
            render json: {error: "Park Not Found"}, status: :not_found
        end
    end
    
    private
    
    def park_params
        params.permit(:full_name, :state, :description, :image, :url)
    end

    def authorize
        return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
          # if our session includes the right id then we'll send the right thing else we'll send the error
    end

end
