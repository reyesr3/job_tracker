class AddSubjectToInteractions < ActiveRecord::Migration
  def change
    add_column :interactions, :subject, :string
  end
end
