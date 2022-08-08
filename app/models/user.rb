class User < ApplicationRecord
    has_secure_password
    has_many :passes
    has_many :parks, through: :passes
end
