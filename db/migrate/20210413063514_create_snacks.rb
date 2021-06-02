class CreateSnacks < ActiveRecord::Migration[6.0]
  def change
    create_table :snacks do |t|
      t.string :name, null: false
      t.integer :alcohol, null: false, default: 0
      t.string :image

      t.timestamps
    end
  end
end
