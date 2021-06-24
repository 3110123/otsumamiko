class MypagesController < ApplicationController
  include Pagy::Backend
  before_action :set_mypage, only: %i[show edit update]

  def show; end

  def edit; end

  def update
    if @user.update(user_update_params)
      render json: { user: @user }
    else
      render json: { user: @user, errors: { messages: @user.errors.full_messages } }, status: :bad_request
    end
  end
  
  def bookmark
    @current_user_bookmarks = current_user.bookmarks_snacks
    @pagy, @user_bookmarks = pagy_countless(@current_user_bookmarks.distinct.includes(:reviews, {image_attachment: :blob}), link_extra: 'data-remote="true"')

    if @pagy.page == @pagy.pages
      @next_page = "last"
    else
      @next_page = @pagy.page
    end
  end

  def review
    @current_user_reviews = current_user.reviews_snacks
    @pagy, @user_reviews = pagy_countless(@current_user_reviews.distinct.includes(:reviews, {image_attachment: :blob}), link_extra: 'data-remote="true"')

    if @pagy.page == @pagy.pages
      @next_page = "last"
    else
      @next_page = @pagy.page
    end
  end

  private

  def user_update_params
    params.require(:user).permit(:name, :email)
  end

  def set_mypage
    @user = User.find(current_user.id)
  end
end
