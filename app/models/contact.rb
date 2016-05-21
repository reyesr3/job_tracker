class Contact < ActiveRecord::Base
	belongs_to :user
	has_many :relationships, dependent: :destroy
	has_many :contact_companies, through: :relationships, source: :job
	has_many :interactions
end
