class Admin::SnacksController < Admin::BaseController
  
  def new
  end

  def create
    @snack = Snack.new(snack_params)
binding.pry
    if @snack.save
      flash[:success] = "投稿しました"
      redirect_to new_admin_snack_path
    else
      flash[:error] = "投稿に失敗しました"
      render :new
    end
  end
  
  def index
    @snacks = Snack.all.includes(:tags, :reviews, :bookmarks)
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
      flash[:success] = "投稿しました"
      redirect_to admin_snack_path(@snack)
    else
      flash[:error] = "投稿に失敗しました"
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
