class Collection < ApplicationRecord
    has_many :opera_collections, dependent: :destroy
    has_many :operas, through: :opera_collections 
    validates :user, presence: true 
    validates :name, presence: true 
end
