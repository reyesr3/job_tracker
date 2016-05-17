class JobsController < ApplicationController
	def index
		render_jobs
	end
	def create
		Job.create(job_params)
		render_jobs
	end
	def edit
		Job.find(1)

	end
	# def update
	# 	Opp = Job.find(params[:id])
	# 	Opp.update(job_params)
	# 	render_jobs
	# end
	private

		def render_jobs
			render :json => Job.all
		end

		def job_params
			params.require(:job).permit(:company, :company_link, :position, :position_link, :app_date, :primary, :nas, :nas_date)
		end
end
