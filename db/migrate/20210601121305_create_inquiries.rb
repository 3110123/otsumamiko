class CreateInquiries < ActiveRecord::Migration[6.0]
  def change
    create_table :inquiries do |t|
      t.text :message, null: false
      t.integer :category, null: false, default: 0
      t.string :name
      t.string :email

      t.timestamps
    end
  end
end
