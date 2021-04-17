class SnacksController < ApplicationController
  def new
  end

  def index
  end

  def show
  end

  private
  
  def snack_params
    params.require(snack).permit(:name, :alcohol, :image)
  end
end
