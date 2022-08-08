class PassSerializer < ActiveModel::Serializer
  attributes :id, :price, :user_id, :park_id

  belongs_to :user
  belongs_to :park
end
