class Admin::SnacksController < Admin::BaseController
  include Pagy::Backend
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
    @q = Snack.ransack(params[:q])
    @pagy, @snacks = pagy(@q.result(distinct: true).includes(:tags, :reviews, :bookmarks))
  end

  def show
    @snack = Snack.find(params[:id])
    @reviews = @snack.reviews
  end

  def edit
    @snack = Snack.find(params[:id])
  end

  def update
    @snack = Snack.find(params[:id])

    if @snack.update(snack_params)
      redirect_to admin_snack_path(@snack), success: "更新に成功しました"
    else
      flash.now[:danger] = "更新に失敗しました"
      render :edit
    end
  end

  def destroy
    @snack = Snack.find(params[:id])
    @snack.destroy!
  end

  private

  def snack_params
    params.require(:snack).permit(:name, :alcohol, :image, tag_ids: [])
  end
end
