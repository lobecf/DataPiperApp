class ChangeQuantityToBeIntegerInJobs < ActiveRecord::Migration[6.1]
  def change
    change_column :jobs, :quantity, :integer
  end
end
