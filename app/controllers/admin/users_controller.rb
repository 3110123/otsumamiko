class Admin::UsersController < Admin::BaseController
  include Pagy::Backend
  before_action :set_user, only: %i[edit update destroy]
  def index
    @pagy, @users = pagy(User.all)
  end

  def edit; end

  def update
    if @user.update(user_params)
      redirect_to admin_users_path, success: "ユーザー情報を変更しました"
    else
      flash.now[:danger] = "ユーザー情報を変更できませんでした"
      render :edit
    end
  end

  def destroy
    @user.destroy!
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :role)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
