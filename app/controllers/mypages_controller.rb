class MypagesController < ApplicationController
  include Pagy::Backend

  def show
    @user = User.find(current_user.id)
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
end
