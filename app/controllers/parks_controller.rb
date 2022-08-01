class ParksController < ApplicationController
    def index
        park = Park.all
        render json: park, includes: :reviews
    end

    def show
        park = Park.find_by(id: params[:id])
        if park
        render json: park
        else
        render json: {error: "Park Not Found"}, status: :not_found
        end
    end
    
    private
    
    def user_params
        params.permit(:full_name, :state, :description, :image, :url)
    end

end
