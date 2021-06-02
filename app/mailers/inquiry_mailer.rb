class InquiryMailer < ApplicationMailer
  def send_mail(inquiry)
    @inquiry = inquiry
    mail(to: @inquiry.email, subject: "お問合せ内容")
  end

  def receive_mail(inquiry)
    @inquiry = inquiry
    mail(to: Rails.application.credentials.gmail[:from], subject: "お問合せ通知")
  end
end
