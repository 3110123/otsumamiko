class Admin::ReviewsController < Admin::BaseController
  def destroy
    @review = Review.find(params[:id])
    @review.destroy!
  end
end
