class CreateTagRelationships < ActiveRecord::Migration[6.0]
  def change
    create_table :tag_relationships do |t|
      t.references :tag, null: false, foreign_key: true
      t.references :snack, null: false, foreign_key: true

      t.timestamps
    end
  end
end
