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
    if @review.save
      flash[:notice] = "コメントを投稿しました"
      redirect_to beers_path
    else
      flash[:alert] = "コメント投稿に失敗しました"
      render :new
    end
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
