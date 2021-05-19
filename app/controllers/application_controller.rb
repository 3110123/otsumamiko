class ApplicationController < ActionController::Base
  before_action :require_login

  private

  def not_authenticated
    flash[:alert] = "ログインしないと使えない機能です！"
  end
end
