class Admin::TagsController < Admin::BaseController
  include Pagy::Backend
  before_action :set_tag, only: %i[edit update destroy]
  def new
    @tag = Tag.new
  end

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      redirect_to new_admin_tag_path, success: "タグを作成しました"
    else
      flash.now[:danger] = "タグを作成できませんでした"
      render :new
    end
  end

  def edit; end

  def update
    if @tag.update(tag_params)
      redirect_to admin_tags_path, success: "更新しました"
    else
      flash.now[:danger] = "更新に失敗しました"
      render :edit
    end
  end

  def index
    @pagy, @tags = pagy(Tag.all.includes(:snacks))
  end

  def destroy
    @tag.destroy!
  end

  private

  def tag_params
    params.require(:tag).permit(:name)
  end

  def set_tag
    @tag = Tag.find(params[:id])
  end
end
