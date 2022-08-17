class JobSerializer < ActiveModel::Serializer
  attributes :id, :name 
  has_one :tradesman
  has_one :location
end
