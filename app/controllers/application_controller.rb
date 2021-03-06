class ApplicationController < ActionController::Base
  if Rails.env.production?
    rescue_from Exception, with: :render_500
    rescue_from ActiveRecord::RecordNotFound, with: :render_404
  end

  def render_404
    render file: Rails.root.join('public', '404.html'), status: 404, layout: false, content_type: 'text/html'
  end

  def render_500(error)
    logger.error(error.message)
    logger.error(error.backtrace.join("\n"))
    render file: Rails.root.join('public', '500.html'), status: 500, layout: false, content_type: 'text/html'
  end
end
