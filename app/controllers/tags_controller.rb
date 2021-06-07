class TagsController < ApplicationController
  def index
    @q = Tags.ransack(params[:q])
    @tags = @q.result(distinct: true)
  end
end