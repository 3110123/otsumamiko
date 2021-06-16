class SearchSnacksForm
  include ActiveModel::Model
  include ActiveModel::Attributes

  attribute :tag_ids, :integer
  attribute :name, :string

  def search
    relation = Snack.distinct
    relation = relation.by_tag(tag_ids) if tag_ids.present?

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