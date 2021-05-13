class OperaSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :director, :description, :im_src 
end
