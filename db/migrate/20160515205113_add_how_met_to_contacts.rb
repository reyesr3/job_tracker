class AddHowMetToContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :how_met, :text
  end
end
