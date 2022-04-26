class AddSkillsNeededToJobs < ActiveRecord::Migration[6.1]
  def change
    add_column :jobs, :skills_needed, :string
  end
end
