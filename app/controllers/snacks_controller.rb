class SnacksController < ApplicationController
  def new
  end

  def show
  end

  def beer_index
    @q = Snack.beer.ransack(params[:q])
    @snack = @q.result(distinct: true)
  end

  def wine_index
    @q = Snack.wine.ransack(params[:q])
    @snack = @q.result(distinct: true)
  end

  def sake_index
    @q = Snack.sake.ransack(params[:q])
    @snack = @q.result(distinct: true)
  end

  private
  
  def snack_params
    params.require(snack).permit(:name, :alcohol, :image)
  end
end
