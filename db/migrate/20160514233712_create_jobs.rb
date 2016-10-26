class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.string :company
      t.string :position
      t.datetime :app_date
      t.string :resp_status
      t.string :primary
      t.datetime :nas_date
      t.text :nas
      t.text :company_link
      t.text :position_link

      t.timestamps null: false
    end
  end
end
