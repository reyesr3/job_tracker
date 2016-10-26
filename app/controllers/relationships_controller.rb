class RelationshipsController < ApplicationController

	def index
		render_relationships
	end

	def create
		# info = Contact.find(params[:id]).contact_companies.where(id: params[:jobID])
		# puts '************************'
		# puts info
		# puts '************************'
		# if(info)
		# 	flash[:createError] = "Company already exists"
		# else
			
		# end
		create_relationships
		render_relationships
	end

	def destroy
		Relationship.find_by(job_id: Job.find(params[:jobID]), contact:Contact.find(params[:id])).destroy
		render_relationships
	end

	private

		def create_relationships
			Relationship.create(job: Job.find(params[:jobID]), contact:Contact.find(params[:id]), user:User.find(current_user.id))
		end

		def render_relationships
			render json: Contact.find(params[:id]).contact_companies
		end

end	