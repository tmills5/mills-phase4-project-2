class ParksController < ApplicationController
    wrap_parameters format: []
    
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
    
    private
    
    def park_params
        params.permit(:full_name, :state, :description, :image, :url)
    end

end
