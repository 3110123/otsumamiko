class Snack < ApplicationRecord
  has_many :bookmarks, dependent: :destroy
  validates :snackname, uniqueness: true, presence: true
  enum alcohol: { beer: 0, wine: 1, sake: 2 }
end
