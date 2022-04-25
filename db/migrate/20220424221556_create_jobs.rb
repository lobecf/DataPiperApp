class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :client
      t.string :poc
      t.string :email
      t.string :role
      t.string :urgancy
      t.string :quantity

      t.timestamps
    end
  end
end
