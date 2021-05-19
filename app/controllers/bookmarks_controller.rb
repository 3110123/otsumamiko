class BookmarksController < ApplicationController
  before_action :require_login
  def create
    @snack = Snack.find(params[:snack_id])
    current_user.bookmark(@snack)
  end

  def destroy
    @snack = Snack.find(params[:snack_id])
    current_user.unbookmark(@snack)
  end
end
