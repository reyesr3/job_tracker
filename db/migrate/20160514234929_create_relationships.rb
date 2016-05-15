class CreateRelationships < ActiveRecord::Migration
  def change
    create_table :relationships do |t|
      t.references :job, index: true
      t.references :contact, index: true

      t.timestamps null: false
    end
    add_foreign_key :relationships, :jobs
    add_foreign_key :relationships, :contacts
  end
end
