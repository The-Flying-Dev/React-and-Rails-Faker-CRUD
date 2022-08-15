class Api::V1::StocksController < ApplicationController
  before_action :set_stock, only: [:update, :destroy]

  def index
    stocks = Stock.all.order(created_at: :desc)
    render json: stocks
  end
 
  def create
    stock = Stock.new(stock_params)
    if stock.save 
      render json: stock
    else   
      render json: stock.errors, status: :unprocessable_entity
    end
  end

  def update 
    if stock.update(stock_params)
      render json: stock
    else   
      render json: stock.errors, status: :unprocessable_entity
    end
  end

  # &. -> Safe Navigation Operator, checks the value exists before calling the destroy method
  def destroy
    stock&.destroy
    render json: { message: 'stock was successfully deleted' }
  end

  private   

  def set_stock 
    stock = Stock.find(params[:id])
  end

  def stock_params 
    params.require(:stock).permit(:name, :description, :quantity, :unit_price)
  end

end
