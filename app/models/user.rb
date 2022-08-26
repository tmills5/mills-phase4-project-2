class User < ApplicationRecord
    has_secure_password
    has_many :passes, dependent: :destroy
    has_many :parks, through: :passes

    validates :name, presence: true, uniqueness: true
end
