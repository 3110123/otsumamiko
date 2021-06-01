class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.references :user, null: false, foreign_key: true
      t.references :snack, null: false, foreign_key: true
      t.text :comment, null: false
      t.integer :rate, null: false
      t.integer :sweetness, null: false
      t.integer :salty, null: false
      t.integer :acidity, null: false
      t.integer :taste, null: false
      t.integer :scent, null: false

      t.timestamps
    end
  end
end
