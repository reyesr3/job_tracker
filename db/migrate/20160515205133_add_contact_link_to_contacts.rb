class AddContactLinkToContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :contact_link, :text
  end
end
