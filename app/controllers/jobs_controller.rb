class JobsController < ApplicationController
	def index
		render_jobs
	end
	def create
		Job.create(job_params)
		render_jobs
	end
	def show
		render json: Job.find(params[:id]) 
	end	
	def edit
		render json: Job.find(params[:id])
	end
	def update
		@newInfo = Job.find(params[:id]);
		render json: @newInfo.update(job_params)
	end
	def destroy
		Job.find(params[:id]).destroy
		render_jobs
	end

	private

		def render_jobs
			render :json => Job.all
		end

		def job_params
			params.require(:job).permit(:company, :company_link, :position, :position_link, :app_date, :primary, :nas, :nas_date, :resp_status)
		end
end
