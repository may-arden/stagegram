class OperasController < ApplicationController
    before_action :set_opera, only: [:show, :update, :destroy]

    # GET /operas
    def index
        @operas = Opera.all 
        render json: @operas, except: [:created_at, :updated_at]
    end 


    # GET /operas/:id
    def show
        @opera = Opera.find(params[:id])
        render json: @opera 
    end 

    # POST /operas
    def create 
        @opera = Opera.new(opera_params)

        if @opera.save
            render json: @opera 
        else 
            render json: @opera.errors 
        end 

    end 

    #

    private

    def set_opera
        @opera = Opera.find(params[:id])
    end 

    def opera_params
        params.require(:opera).permit(:title, :director, :description, :img_src)
    end 
end
