class ParkSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :state, :description, :image, :url

  has_many :reviews
  # has_many :users, through: :reviews
end
