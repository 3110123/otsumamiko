class Admin::SnacksController < Admin::BaseController
  include Pagy::Backend
  before_action :set_snack, only: %i[show edit update destroy]
  def new
    @snack = Snack.new
  end

  def create
    @snack = Snack.new(snack_params)

    if @snack.save
      redirect_to new_admin_snack_path, success: "おつまみを追加しました"
    else
      flash.now[:danger] = "おつまみを追加に失敗しました"
      render :new
    end
  end
  
  def index
    @pagy, @snacks = pagy(Snack.all.includes(:tags, :reviews, :bookmarks, { image_attachment: :blob }))
  end

  def show
    @reviews = @snack.reviews
  end

  def edit; end

  def update
    if @snack.update(snack_params)
      redirect_to admin_snack_path(@snack), success: "更新に成功しました"
    else
      flash.now[:danger] = "更新に失敗しました"
      render :edit
    end
  end

  def destroy
    @snack.image.purge if @snack.image.attached?
    @snack.destroy!
  end

  private

  def snack_params
    params.require(:snack).permit(:name, :alcohol, :image, tag_ids: [])
  end

  def set_snack
    @snack = Snack.find(params[:id])
  end
end
