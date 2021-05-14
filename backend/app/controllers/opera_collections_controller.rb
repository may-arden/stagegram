class OperaCollectionsController < ApplicationController
    before_action :set_opera_collection, only: [:show, :update, :destroy]

    def index 
        @opera_collections = OperaCollection.all 
        render json: @opera_collections.to_json(include: [:opera, :collection]) 
    end 

    def show 
        render json: @opera_collection 
    end 

    def create 
        @opera_collection = OperaCollection.new(opera_collection_params)

        if @opera_collection.save 
            render json: @opera_collection, status: :created, location: @opera_collection 
        else
            render json: @opera_collection.errors, status: :unprocessable_entity
        end 
    end 

    def update 
        if @opera_collection.update(opera_collection_params)
            render json: @opera_collection 
        else
            render json: @opera_collection.errors, status: :unprocessable_entity
        end 

    end 

    def destroy 
        @opera_collection.destroy 
    end 

    private 

    def set_opera_collection 
        @opera_collection = OperaCollection.find(params[:id])
    end 

    def opera_collection_params 
        params.require(:opera_collection).permit(:collection_id, :opera_id) 
    end 

end
