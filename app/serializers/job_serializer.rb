class JobSerializer < ActiveModel::Serializer
  attributes :id, :client, :poc, :email, :role, :urgancy, :quantity
  has_many :applicants
end
