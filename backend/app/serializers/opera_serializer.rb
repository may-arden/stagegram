class OperaSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :director, :description, :img_src 
end
