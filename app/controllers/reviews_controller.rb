class ReviewsController < ApplicationController
    def index
        review = Review.all
        render json: review
    end

    private

    def review_params
        params.permit(:content)
    end
end
