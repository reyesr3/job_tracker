class ContactsController < ApplicationController
	def index
		render_contacts
	end
	def create
		contact1 = Contact.new(contact_params)
		contact1.user = User.find(current_user.id)
		contact1.save
		render_contacts
	end
	def show
		render json: Contact.find(params[:id]) 
	end
	def edit
		render json: Contact.find(params[:id])
	end
	def update
		@newInfo = Contact.find(params[:id]);
		render json: @newInfo.update(contact_params)
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
			params.require(:contact).permit(:first_name, :last_name, :title, :company, :contact_link, :how_met, :last_contacted, :nas, :nas_date, :resp_status)
		end	
end
