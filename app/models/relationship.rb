class Relationship < ActiveRecord::Base
  belongs_to :job
  belongs_to :contact
  belongs_to :user
end
