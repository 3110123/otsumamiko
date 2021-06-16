class SearchSnacksForm
  include ActiveModel::Model
  include ActiveModel::Attributes

  attribute :name, :string
  attr_accessor :tag_ids

  def search
    relation = Snack.distinct

    if tag_ids.present?
      match_tags = TagRelationship.where(tag_id: tag_ids).group(:snack_id).select(:snack_id).having('count(snack_id) = ?', tag_ids.length)
      snack_ids = match_tags.map(&:snack_id)
      relation = Snack.where(id: snack_ids)
    end

    name_words.each do |name|
      relation = relation.name_contain(name)
    end

    relation
  end

  private

  def name_words
    name.present? ? name.split(nil) : []
  end
end