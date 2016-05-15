class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :title
      t.datetime :last_contacted
      t.string :resp_status
      t.datetime :nas_date
      t.text :nas
      t.string :company

      t.timestamps null: false
    end
  end
end
