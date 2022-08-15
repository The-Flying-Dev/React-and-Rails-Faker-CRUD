class Stock < ApplicationRecord
  #validations, ensure only valid data is saved into the database by protecting the databse from invalid data
  validates :name, :description, :quantity, :unit_price, presence: true
end
