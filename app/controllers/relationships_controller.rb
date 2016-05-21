class RelationshipsController < ApplicationController

	def index
		render json: Relationship.where(contact:Contact.find(params[:id]))
	end

	def create
		info = Relationship.find_by(job: Job.find(params[:jobID]))
		if(info)
			flash[:createError] = "Company already exists"
		else
			Relationship.create(job: Job.find(params[:jobID]), contact:Contact.find(params[:contactID]), user:User.find(current_user.id))
		end
		render_relationships
	end

	def destroy
		Relationship.find_by(job: Job.find(params[:jobID])).destroy
		render_relationships
	end

	private
		def render_relationships
			
		end

end	