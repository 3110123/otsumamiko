class Snack < ApplicationRecord
  has_many :bookmarks, dependent: :destroy
  has_many :tag_relationships, dependent: :destroy
  has_many :tags, through: :tag_relationships
  has_many :reviews, dependent: :destroy
  has_one_attached :image
  validates :name, uniqueness: true, presence: true
  enum alcohol: { beer: 0, wine: 1, sake: 2 }

  scope :by_tag, -> (tag_ids) { includes(:tag_relationships).where(tag_relationships: {tag_id: tag_ids}) }
  scope :name_contain, -> (name) { where('name LIKE ?', "%#{name}%") }
end
