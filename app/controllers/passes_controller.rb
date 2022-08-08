class PassesController < ApplicationController
    wrap_parameters format: []
    
    def index
        passes = Pass.all
        render json: passes, status: :ok
    end

    def create
        pass = Pass.create(pass_params)
        render json: pass, status: :created
    end

    def show
        pass = Pass.find_by(id: params[:id])
        if pass
        render json: pass
        else
        render json: { error: "Pass not found"}, status: :not_found
        end
    end

    def update
        pass = Pass.find_by(id: params[:id])
        if pass
        pass.update(pass_params)
        render json: pass, status: :accepted
        else
        render json: { error: "Pass not found"}, status: :not_found
        end
    end

    def destroy
        pass = Pass.find_by(id: params[:id])
        if pass
        pass.destroy
        head :no_content
        else
        render json: { error: "Pass not found"}, status: :not_found
        end
    end

    private

    def pass_params
        params.permit(:price, :user_id, :park_id)
    end
end
