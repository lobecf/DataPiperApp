class CreateApplicants < ActiveRecord::Migration[6.1]
  def change
    create_table :applicants do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone
      t.string :address
      t.string :city
      t.string :country
      t.string :zipcode
      t.belongs_to :job, null: false, foreign_key: true

      t.timestamps
    end
  end
end
