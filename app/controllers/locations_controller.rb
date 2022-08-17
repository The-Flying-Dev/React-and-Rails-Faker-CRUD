class LocationsController < ApplicationController 

  def index 
    render json: Job.all
  end
  
end