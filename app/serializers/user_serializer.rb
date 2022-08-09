class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password, :is_admin
  
  has_many :passes
end
