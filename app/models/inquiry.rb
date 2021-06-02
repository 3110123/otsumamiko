class Inquiry < ApplicationRecord
  validates :category, presence: true
  validates :message, presence: true, length: { maximum: 3000 }

  enum category: { bug: 0, request: 1, others: 2}
end
