class Collection < ApplicationRecord
    has_many :opera_collections, dependent: :destroy
    has_many :operas, through: :opera_collections 
end
