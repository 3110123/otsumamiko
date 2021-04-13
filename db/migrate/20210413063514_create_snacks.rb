class CreateSnacks < ActiveRecord::Migration[6.0]
  def change
    create_table :snacks do |t|
      t.string :snackname
      t.integer :alcohol, default: 0
      t.string :image

      t.timestamps
    end
  end
end
