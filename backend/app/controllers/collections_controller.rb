class CollectionsController < ApplicationController
    before_action :set_collection, only: [:show, :update, :destroy]

    def index 
        @collections = Collection.all 
        render json: @collection.to_json(include: [:operas])
    end  

    def show 
        render json: @collection.to_json(include: [:operas])
    end 

    # POST /collections
    def create 
        @collection = Collection.new(collection_params)
          if @collection.save 
            render json: @collectoin.to_json(include: [:operas])
          else 
            render json: @collection.errors, status: :unprocessable_entity
    
        end     
    end 

    # PATCH/PUT /collections/:id
    def update 
        if @collection.update(collection_params) 
            render json: @collection 
        else
            render json: @collection.errors, status: :unprocessable_entity 
        end 
    end 

    def destroy 
        @collection.destroy 
    end 

    private 

    def set_collection 
        @collection = Collection.find(params[:id])
    end 

    def collection_params 
        params.require(:collection).permit(:name, :user, :opera_ids[])
    end 

end
