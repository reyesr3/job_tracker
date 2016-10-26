class AddJobDescriptionToJobs < ActiveRecord::Migration
  def change
    add_column :jobs, :job_description, :text
  end
end
