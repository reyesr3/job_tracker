class Relationship < ActiveRecord::Base
  belongs_to :job
  belongs_to :contact
end
