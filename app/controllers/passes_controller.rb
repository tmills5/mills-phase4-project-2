class PassesController < ApplicationController
    wrap_parameters format: []
    
    def index
        if params[:user_id]
            user = find_user
            passes = user.passes
        else
            passes = Pass.all
        end
        render json: passes, include: :user
    end

    def create
        user = find_user
        pass = user.pass.create!(pass_params)
        render json: pass, status: :created
    end

    def show
        pass = find_pass
        if pass
        render json: pass
        else
        render json: { error: "Pass not found"}, status: :not_found
        end
    end

    def update
        pass = find_pass
        if pass
        pass.update(pass_params)
        render json: pass, status: :accepted
        else
        render json: { error: "Pass not found"}, status: :not_found
        end
    end

    def destroy
        pass = find_pass
        if pass
        pass.destroy
        head :no_content
        else
        render json: { error: "Pass not found"}, status: :not_found
        end
    end

    private

    def find_user
        User.find(params[:user_id])
    end

    def find_pass
        Pass.find(params[:id])
    end

    def pass_params
        params.permit(:price, :user_id, :park_id)
    end
end
