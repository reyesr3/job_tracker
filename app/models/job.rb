class Job < ActiveRecord::Base
	belongs_to :user
	has_many :relationships, dependent: :destroy
	has_many :company_contacts, through: :relationships, source: :contact
end
