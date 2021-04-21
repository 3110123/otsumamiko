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

  def beer; end

  def sake; end

  def wine; end

  def result
    tags = params[:user_select_tag]
    select_alcohol = params[:user_select_alcohol]
    matchAllTags = TagRelationship.where(tag_id: tags).group(:snack_id).select(:snack_id).having('count(snack_id) = 3')
    snackIds = matchAllTags.map(&:snack_id)
    @query = Snack.where(id: snackIds, alcohol: select_alcohol).sample
  end

  private
  
  def snack_params
    params.require(snack).permit(:name, :alcohol, :image)
  end
end
