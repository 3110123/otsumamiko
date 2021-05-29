class Snack < ApplicationRecord
  has_many :bookmarks, dependent: :destroy
  has_many :tag_relationships, dependent: :destroy
  has_many :tags, through: :tag_relationships
  has_many :reviews, dependent: :destroy

  has_one_attached :image

  validates :name, uniqueness: true, presence: true
  enum alcohol: { beer: 0, wine: 1, sake: 2 }
end
