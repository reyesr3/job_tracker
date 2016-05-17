class CreateInteractions < ActiveRecord::Migration
  def change
    create_table :interactions do |t|
      t.text :activity
      t.datetime :activity_date
      t.references :user, index: true
      t.references :job, index: true
      t.references :contact, index: true

      t.timestamps null: false
    end
    add_foreign_key :interactions, :users
    add_foreign_key :interactions, :jobs
    add_foreign_key :interactions, :contacts
  end
end
