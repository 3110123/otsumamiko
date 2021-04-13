class UserSessionsController < ApplicationController
  def new; end

  def create
    @user = login(params[:email], params[:password])
    if @user
      flash[:notice] = 'ログインしました。'
      redirect_back_or_to root_path
    else
      flash[:alert] = 'ログインに失敗しました。エラーメッセージを確認してください。'
      render :new
    end
  end

  def destroy
    logout
    flash[:notice] = 'ログアウトしました。'
    redirect_to root_path
  end
end
