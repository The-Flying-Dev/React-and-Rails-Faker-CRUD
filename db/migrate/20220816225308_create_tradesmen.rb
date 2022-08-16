class CreateTradesmen < ActiveRecord::Migration[6.1]
  def change
    create_table :tradesmen do |t|
      t.string :name
      t.string :field_of_work
      t.string :avatar

      t.timestamps
    end
  end
end
