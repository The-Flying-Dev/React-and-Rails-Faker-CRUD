class CreateStocks < ActiveRecord::Migration[6.1]
  def change
    create_table :stocks do |t|
      t.string :name, null: false
      t.string :description
      t.integer :quantity, null: false
      t.float :unit_price, null: false

      t.timestamps
    end
  end
end
