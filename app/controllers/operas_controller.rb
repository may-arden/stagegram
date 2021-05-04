class OperasController < ApplicationController

    # GET /operas
    def index
        operas = Opera.all 
        render json: operas, except: [:created_at, :updated_at]
    end 

end
