class ParkSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :state, :description, :activities, :image, :url

  has_many :passes
  has_many :users, through: :passes
end
