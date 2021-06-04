class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      auto_login(@user)
      flash[:notice] = 'ようこそ！'
      redirect_to root_path
    else
      flash[:alert] = '新規登録に失敗しました。エラーメッセージを確認してください。'
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
    @q = current_user.reviews_snacks.ransack(params[:q])
    @user_reviews = @q.result(distinct: true).includes(:reviews, :image_attachment)
    @q = current_user.bookmarks_snacks.ransack(params[:q])
    @user_bookmarks = @q.result(distinct: true).includes(:reviews, :image_attachment)
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
