class ReviewsController < ApplicationController
  def new
    @review = Review.new
  end

  def index
    @review = Review.all
  end

  def show
  end

  def create
    @review = current_user.reviews.build(review_params)
    @review.save
  end

  def edit
    @review = Review.find(params[:id])

  end

  def update
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy!
  end

  private

  def review_params
    params.require(:review).permit(:comment, :rate, :sweetness, :salty, :acidity, :taste, :scent).merge(snack_id: params[:snack_id])
  end
end
