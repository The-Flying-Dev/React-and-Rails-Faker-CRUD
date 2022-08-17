class Location < ApplicationRecord
  has_many :jobs, dependent: :destroy
  has_many :tradesman, through: :jobs
end
