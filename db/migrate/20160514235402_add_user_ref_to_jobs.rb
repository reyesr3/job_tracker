class AddUserRefToJobs < ActiveRecord::Migration
  def change
    add_reference :jobs, :job, index: true
    add_foreign_key :jobs, :jobs
  end
end
