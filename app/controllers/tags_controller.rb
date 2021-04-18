class TagsController < ApplicationController
  def new
  end

  def create
  end

  def destroy
  end

  private
  
  def tag_params
    params.require(tag).permit(:name)
  end
end
