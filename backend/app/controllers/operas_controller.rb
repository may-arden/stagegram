class OperasController < ApplicationController

    # GET /operas
    def index
        # OLD CODE PRIOR TO INSTALLATION OF 'FAST_JSONAPI'
        # @operas = Opera.all 
        # render json: @operas, except: [:created_at, :updated_at]
        # CURRENT CODE TO REFLECT 'FAST_JSONAPI'
        operas = Opera.all 
        render json: OperaSerializer.new(operas)
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
