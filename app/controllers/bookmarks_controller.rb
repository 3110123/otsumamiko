class BookmarksController < ApplicationController
  def create
    @snack = Snack.find(params[:snack_id])
    current_user.bookmark(@snack)
  end

  def destroy
    @snack = Snack.find(params[:snack_id])
    current_user.unbookmark(@snack)
  end
end