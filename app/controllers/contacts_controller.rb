class ContactsController < ApplicationController
	def index
		render_contacts
	end

	def create
		Contact.create(contact_params)
		render_contacts
	end

	def destroy
		Contact.find(params[:id]).destroy
		render_contacts
	end

	private

		def render_contacts
			render :json => Contact.all
		end

		def contact_params
			params.require(:contact).permit(:first_name, :last_name, :title, :company, :contact_link, :how_met, :last_contacted, :nas, :nas_date)
		end
		
end
