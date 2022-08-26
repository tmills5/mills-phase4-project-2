class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password, :is_admin
  
  has_many :passes
  has_many :parks, through: :passes
end
