class Opera < ApplicationRecord
    has_many: :opera_collections, dependent: :destroy
    has_many: :collections, through: :opera_collections 
end
