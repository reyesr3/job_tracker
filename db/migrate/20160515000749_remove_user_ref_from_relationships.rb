class RemoveUserRefFromRelationships < ActiveRecord::Migration
  def change
    remove_reference :relationships, :user, index: true
    remove_foreign_key :relationships, :users
  end
end
