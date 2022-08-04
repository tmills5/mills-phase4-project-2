class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews
    end

    private

    def review_params
        params.permit(:content)
    end
end
