class Tradesman < ApplicationRecord
  has_many :jobs, dependent: :destroy
  has_many :locations, through: :jobs 

  validates :name, uniqueness: true
  validates :name, :field_of_work, presence: true
end
