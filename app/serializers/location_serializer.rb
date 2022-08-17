class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :distance_away
end
