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
    @review = current_user.reviews.find(params[:id])
    if @review.update(review_update_params)
      render json: { review: @review }
    else
      render json: { review: @review, errors: { messages: @review.errors.full_messages } }, status: :bad_request
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy!
  end

  private

  def review_params
    params.require(:review).permit(:comment, :rate, :sweetness, :salty, :acidity, :taste, :scent).merge(snack_id: params[:snack_id])
  end

  def review_update_params
    params.require(:review).permit(:comment)
  end
end
