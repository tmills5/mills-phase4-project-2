class ParkSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :state, :description, :image, :url
end
