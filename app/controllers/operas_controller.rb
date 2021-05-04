class OperasController < ApplicationController

    def index
        operas = Opera.all 
        render json: operas, include: [:title, :director, :description, :img_src]
    end 

end
