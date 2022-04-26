class JobSerializer < ActiveModel::Serializer
  attributes :id, :client, :poc, :email, :role, :urgancy, :quantity, :skills_needed
  has_many :applicants
end
