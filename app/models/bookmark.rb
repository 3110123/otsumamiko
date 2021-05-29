class Bookmark < ApplicationRecord
  belongs_to :user
  belongs_to :snack
  validates_uniqueness_of :snack_id, scope: :user_id
end
