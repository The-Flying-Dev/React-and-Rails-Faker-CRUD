class Job < ApplicationRecord
  belongs_to :tradesman
  belongs_to :location

  validates :name, presence: true
  validates :tradesman, uniqueness: {scope: :name}
end
