class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :address, :city, :country, :zipcode
  has_one :job
end
