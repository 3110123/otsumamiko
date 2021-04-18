class SnacksController < ApplicationController
  def new
  end

  def show
  end

  def beer_index
    @snack = Snack.all
  end

  def wine_index
    @snack = Snack.all
  end

  def sake_index
    @snack = Snack.all
  end

  private
  
  def snack_params
    params.require(snack).permit(:name, :alcohol, :image)
  end
end
