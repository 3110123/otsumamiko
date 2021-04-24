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
  end

  def update
  end

  def destroy
  end

  private

  def review_params
    params.require(:review).permit(:comment, :rate, :sweetness, :salty, :acidity, :taste, :scent).merge(snack_id: params[:snack_id])
  end
end
