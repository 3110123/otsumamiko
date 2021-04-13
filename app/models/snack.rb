class Snack < ApplicationRecord 
  validates :snackname, uniqueness: true, presence: true
  enum alcohol: { beer: 0, wine: 1, sake: 2 }
end
