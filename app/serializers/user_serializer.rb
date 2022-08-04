class UserSerializer < ActiveModel::Serializer
  attributes :name, :password
  
  has_many :reviews
end
