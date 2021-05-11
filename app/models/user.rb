class User < ApplicationRecord
  has_many :bookmarks, dependent: :destroy
  has_many :bookmarks_snacks, through: :bookmarks, source: :snack
  has_many :reviews, dependent: :destroy
  has_many :reviews_snacks, through: :reviews, source: :snack
  authenticates_with_sorcery!

  validates :password, length: { minimum: 3 }, if: -> { new_record? || changes[:crypted_password] }
  validates :password, confirmation: true, if: -> { new_record? || changes[:crypted_password] }
  validates :password_confirmation, presence: true, if: -> { new_record? || changes[:crypted_password] }
  validates :name, presence: true
  validates :email, uniqueness: true, presence: true
end
