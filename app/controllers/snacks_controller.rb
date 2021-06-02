class SnacksController < ApplicationController
  include Pagy::Backend
  
  def show
    @snack = Snack.find(params[:id])
    @review = Review.new
    @reviews = @snack.reviews.includes(:user).order(created_at: :desc)
    if @snack.reviews.blank?
      @snack_rate = 0.0
    else
      @snack_rate = @snack.reviews.average(:rate).round(2)
    end
  end

  def index
    raise
    @q = Snack.ransack(params[:q])
    @pagy, @snack = pagy_countless(@q.result(distinct: true).includes(:reviews, :bookmarks, {image_attachment: :blob}), link_extra: 'data-remote="true"')
    if @pagy.page == @pagy.pages
      @nextPage = "last"
    else
      @nextPage = @pagy.page
    end
  end

  def result
    tags = params[:tag]
    tag = tags.length
    alcohol = params[:alcohol]
    matchAllTags = TagRelationship.where(tag_id: tags).group(:snack_id).select(:snack_id).having('count(snack_id) = ?', tag)
    snackIds = matchAllTags.map(&:snack_id)
    @query = Snack.where(id: snackIds, alcohol: alcohol).sample
    @snack = Snack.find(@query.id)
    @review = Review.new
    @reviews = @snack.reviews.includes(:user).order(created_at: :desc)
    if @snack.reviews.blank?
      @snack_rate = 0.0
    else
      @snack_rate = @snack.reviews.average(:rate).round(2)
    end
  end

  private
  
  def snack_params
    params.require(:snack).permit(:name, :alcohol, :image)
  end
end
