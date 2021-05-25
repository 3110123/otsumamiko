class Review < ApplicationRecord
  belongs_to :user
  belongs_to :snack

  validates :comment, presence: true, length: { maximum: 1000 }
  validates :rate, presence: true
end
