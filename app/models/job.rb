class Job < ApplicationRecord
  belongs_to :tradesman
  belongs_to :location
end
