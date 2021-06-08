class Admin::InquiriesController < Admin::BaseController
  def index
    @inquiries = Inquiry.all
  end

  def destroy
    inquiry = Inquiry.find(params[:id])
    inquiry.destroy!
  end
end
