class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :park_id
end
