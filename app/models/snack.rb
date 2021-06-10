class Snack < ApplicationRecord
  has_many :bookmarks, dependent: :destroy
  has_many :tag_relationships, dependent: :destroy
  has_many :tags, through: :tag_relationships
  has_many :reviews, dependent: :destroy
  has_one_attached :image
  validates :name, uniqueness: true, presence: true
  enum alcohol: { beer: 0, wine: 1, sake: 2 }

  scope :has_tag_id_all, ->tag_ids { includes(:tag_relationships).where(tag_relationships: {tag_id: tag_ids}).group(ids).having('count(snack_id) = ?', count(tag_ids))
   }

  def self.ransackable_scopes(auth_object = nil)
    %i(has_tag_id_all)
  end
end
