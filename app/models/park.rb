class Park < ApplicationRecord
    has_many :passes
    has_many :users, through: :passes
end
