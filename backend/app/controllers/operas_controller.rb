class OperasController < ApplicationController
    before_action :set_opera, only: [:show, :update, :destroy]

    # GET /operas
    def index
        @operas = Opera.all 
        render json: @operas, except: [:created_at, :updated_at]
    end 


    # GET /operas/:id
    def show
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

        def update
            if @opera.update(opera_params)
                render json: @opera 
            else  
                render json: @opera.errors, status :unprocessable_entity 
        end

        def destroy 
            @opera.destroy 
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
