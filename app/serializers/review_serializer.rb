class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :park_id
  belongs_to :park
end
