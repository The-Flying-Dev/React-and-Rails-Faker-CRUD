class JobsController < ApplicationController 

  def create
    job = Job.create!(job_params)
    render json: job.location, status: :created
  end

  private

  def job_params
      params.permit(:name, :tradesman_id, :location_id)
  end
  
end