class AddUserRefToRelationships < ActiveRecord::Migration
  def change
    add_reference :relationships, :user, index: true
    add_foreign_key :relationships, :users
  end
end
