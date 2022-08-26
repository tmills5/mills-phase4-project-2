class Park < ApplicationRecord
    has_many :passes, dependent: :destroy
    has_many :users, through: :passes

    validates :full_name, presence: true
    validates :state, presence: true
    validates :description, presence: true
end
