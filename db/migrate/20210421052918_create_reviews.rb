class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.references :user, null: false, foreign_key: true
      t.references :snack, null: false, foreign_key: true
      t.text :comment, null: false
      t.integer :rate
      t.integer :sweetness
      t.integer :salty
      t.integer :acidity
      t.integer :taste
      t.integer :scent

      t.timestamps
    end
  end
end
