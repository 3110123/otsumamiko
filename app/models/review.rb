class Review < ApplicationRecord
  belongs_to :user
  belongs_to :snack
  validates :comment, presence: true, length: { maximum: 1000 }
  validates :rate, presence: true
  validates :sweetness, presence: true
  validates :salty, presence: true
  validates :acidity, presence: true
  validates :taste, presence: true
  validates :scent, presence: true
end
