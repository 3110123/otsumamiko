class BookmarksController < ApplicationController
  before_action :set_bookmark, only: %i[create destroy]
  def create
    current_user.bookmark(@snack)
  end

  def destroy
    current_user.unbookmark(@snack)
  end

  private

  def set_bookmark
    @snack = Snack.find(params[:snack_id])
  end
end
