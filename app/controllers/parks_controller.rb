class ParksController < ApplicationController
    wrap_parameters format: []
    before_action :authorize

    def index
        # byebug
        parks = render json: Park.all
    end

    def activities
        # byebug
        parks = Park.all.select { |park| park.activities.include? params[:activityQuery]}
        render json: parks

    end

    def create
        park = Park.create!(park_params)
        render json: park, status: :created
    end

    def show
        park = find_park
        if park
        render json: park, status: :ok
        else
        render json: {error: "Park Not Found"}, status: :not_found
        end
    end

    def update
        park = find_park
        if park
            park.update(park_params)
            render json: park, status: :accepted
        else
            render json: {error: "Park Not Found"}, status: :not_found
        end
    end

    def destroy
        park = find_park
        if park
            park.destroy
            head :no_content
        else
            render json: {error: "Park Not Found"}, status: :not_found
        end
    end

    
    private

    
    def park_params
        params.permit(:id, :full_name, :state, :description, :activities, :image, :url)
    end

    def find_park
        Park.find(params[:id])
    end

    def authorize
        return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
          # if our session includes the right id then we'll send the right thing else we'll send the error
    end

end
