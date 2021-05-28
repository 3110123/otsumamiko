class Admin::UsersController < Admin::BaseController
  include Pagy::Backend
  def index
    @q = User.ransack(params[:q])
    @pagy, @users = pagy(@q.result(distinct: true))
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      redirect_to admin_users_path, success: "ユーザー情報を変更しました"
    else
      flash.now[:danger] = "ユーザー情報を変更できませんでした"
      render :edit
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy!
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :role)
  end
end
