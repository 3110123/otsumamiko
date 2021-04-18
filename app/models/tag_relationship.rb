class TagRelationship < ApplicationRecord
  belongs_to :tag
  belongs_to :snack
end
