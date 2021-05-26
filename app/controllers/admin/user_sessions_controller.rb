class Admin::UserSessionsController < Admin::BaseController
  layout 'admin/layouts/admin_login'
  def new
  end

  def create
    @user = login(params[:email], params[:password])
    if @user
      flash[:success] = "ログインしました"
      redirect_to root_path
    else
      flash[:error] = "ログインできませんでした"
      render :new
    end
  end
end
