class OperaCollectionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :opera, :collection 
  belongs_to :opera 
  belongs_to :collection 
end
