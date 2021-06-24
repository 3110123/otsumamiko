class PasswordResetsController < ApplicationController
  before_action :set_password_reset, only: %i[edit update]
  def new; end 

  def create
    @user = User.find_by_email(params[:email])
    @user.deliver_reset_password_instructions! if @user
    redirect_to login_path, success: "メールを送信しました"
  end

  def edit; end

  def update
    @user.password_confirmation = params[:user][:password_confirmation]
    if @user.change_password(params[:user][:password])
      redirect_to login_path, success: "パスワードを変更しました"
    else
      flash[:danger] = "パスワードを変更できませんでした"
      render :edit
    end
  end

  private

  def set_password_reset
    @token = params[:id]
    @user = User.load_from_reset_password_token(params[:id])
    return not_authenticated if @user.blank?
  end
end
