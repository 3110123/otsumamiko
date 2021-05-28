class Admin::BaseController < ApplicationController
  layout 'admin/layouts/application'
  add_flash_types :success, :info, :warning, :danger
end
