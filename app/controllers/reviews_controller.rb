class ReviewsController < ApplicationController
    wrap_parameters format: []
    
    def index
        reviews = Review.all
        render json: reviews, status: :ok
    end

    def create
        review = Review.create(review_params)
        render json: review, status: :ok
    end

    def show
        review = Review.find_by(id: params[:id])
        if review
        render json: review
        else
        render json: { error: "Review not found"}, status: :not_found
        end
    end

    def update
        review = Review.find_by(id: params[:id])
        if review
        review.update(review_params)
        render json: review, status: :accepted
        else
        render json: { error: "Review not found"}, status: :not_found
        end
    end

    def destroy
        review = Review.find_by(id: params[:id])
        if review
        review.destroy
        head :no_content
        else
        render json: { error: "Review not found"}, status: :not_found
        end
    end

    private

    def review_params
        params.permit(:content)
    end
end
