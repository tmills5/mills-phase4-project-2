class Review < ApplicationRecord
    belongs_to :user, optional: true, foreign_key: true
    belongs_to :park
end
