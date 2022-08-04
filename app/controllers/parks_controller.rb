class ParksController < ApplicationController
    def index
        parks = Park.all
        render json: parks
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
