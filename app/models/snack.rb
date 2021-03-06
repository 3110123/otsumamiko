class Snack < ApplicationRecord
  has_many :bookmarks, dependent: :destroy
  has_many :tag_relationships, dependent: :destroy
  has_many :tags, through: :tag_relationships
  has_many :reviews, dependent: :destroy
  has_one_attached :image
  validates :name, uniqueness: { case_sensitive: true }, presence: true
  validates :alcohol, presence: true
  enum alcohol: { beer: 0, wine: 1, sake: 2 }

  scope :name_contain, ->(name) { where('snacks.name LIKE ?', "%#{name}%") }
end
