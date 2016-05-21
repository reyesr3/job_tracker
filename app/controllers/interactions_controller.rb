class InteractionsController < ApplicationController

	def index
		render_interactions
	end
	
	def create
		interaction = Interaction.new(interaction_params)
		interaction.user = User.find(current_user.id)
		interaction.save
		render_interactions
	end
	
	def show
		render json: Interaction.find(params[:id]) 
	end
	
	def edit
		render json: Interaction.find(params[:id])
	end
	
	def update
		@newInfo = Interaction.find(params[:id]);
		render json: @newInfo.update(interaction_params)
	end	
	
	def destroy
		Interaction.find(params[:id]).destroy
		render_interactions
	end
	
	private

		def render_interactions
			render :json => Interaction.all
		end

		def interaction_params
			params.require(:interaction).permit(:activity, :activity_date, :job_id, :contact_id, :subject)
		end	

end
