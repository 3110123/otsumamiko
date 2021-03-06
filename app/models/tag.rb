class Tag < ApplicationRecord
  has_many :tag_relationships, dependent: :destroy
  has_many :snacks, through: :tag_relationships
  validates :name, uniqueness: { case_sensitive: true }, presence: true
end
