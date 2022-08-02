class ParkSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :state, :description, :image, :url

  has_many :reviews
end
