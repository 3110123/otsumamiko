class Tag < ApplicationRecord
  has_many :snacks, through: :tag_relationships
  has_many :tag_relationships, dependent: :destroy
end