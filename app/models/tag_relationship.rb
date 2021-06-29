class TagRelationship < ApplicationRecord
  belongs_to :tag
  belongs_to :snack

  scope :by_tag, ->(tag_ids) { where(tag_id: tag_ids) }
  scope :group_snack_id, -> { group(:snack_id).select(:snack_id) }
  scope :having_count, ->(tag_ids) { having('count(snack_id) = ?', tag_ids.length) }
end
