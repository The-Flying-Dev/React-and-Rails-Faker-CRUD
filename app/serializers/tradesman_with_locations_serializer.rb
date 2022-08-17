class TradesmanWithLocationsSerializer < ActiveModel::Serializer
  attributes :id, :name, :field_of_work, :avatar
  has_many :locations
end
