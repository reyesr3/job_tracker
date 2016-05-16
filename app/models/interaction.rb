class Interaction < ActiveRecord::Base
  belongs_to :user
  belongs_to :job
  belongs_to :contact
end
