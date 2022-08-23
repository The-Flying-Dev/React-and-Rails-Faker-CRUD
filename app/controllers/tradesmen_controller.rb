class TradesmenController < ApplicationController 

  before_action :set_tradesman, only: [:show, :update, :destroy]

  def index
      render json: Tradesman.all
  end

  def show
      render json: @tradesman, serializer: TradesmanWithLocationsSerializer
  end

  def create
      tradesman = Tradesman.create!(tradesman_params)
      render json: tradesman, status: :created
  end

  def update
      @tradesman.update!(tradesman_params)
      render json: @tradesman, status: :accepted
  end

  def destroy
      @tradesman.destroy
      head :no_content
  end

  private

  def set_tradesman
      @tradesman = Tradesman.find(params[:id])
  end

  def tradesman_params
      params.permit(:name, :field_of_work, :avatar)
  end
  
end