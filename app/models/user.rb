class User < ApplicationRecord
  has_many :bookmarks, dependent: :destroy
  has_many :bookmarks_snacks, through: :bookmarks, source: :snack
  has_many :reviews, dependent: :destroy
  has_many :reviews_snacks, through: :reviews, source: :snack
  authenticates_with_sorcery!
  validates :password, length: { minimum: 6 }, if: -> { new_record? || changes[:crypted_password] }
  validates :password, confirmation: true, if: -> { new_record? || changes[:crypted_password] }
  validates :password_confirmation, presence: true, if: -> { new_record? || changes[:crypted_password] }
  validates :name, presence: true, length: { maximum: 255 }
  validates :email, uniqueness: { case_sensitive:  true }, presence: true
  validates :reset_password_token, presence: true, uniqueness: true, allow_nil: true

  enum role: { general: 0, admin: 1 }

  def bookmark(snack)
    bookmarks_snacks << snack
  end

  def unbookmark(snack)
    bookmarks_snacks.destroy(snack)
  end
end
