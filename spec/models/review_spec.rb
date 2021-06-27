require "rails_helper"

RSpec.describe Review, type: :model do

  it "コメント、rate、sweetness、salty、acidity、taste、scentがある場合、有効" do
    review = build(:review)
    expect(review).to be_valid
  end

  it "コメントがない場合、無効" do
    review = build(:review, comment: nil)
    review.valid?
    expect(review.errors[:comment]).to include("を入力してください") 
  end

  it "コメントが1001字以上、無効" do
    review = build(:review, comment: "a" * 1001)
    review.valid?
    expect(review.errors[:comment]).to include("は1000文字以内で入力してください") 
  end

  it "rateがない場合、無効" do
    review = build(:review, rate: nil)
    review.valid?
    expect(review.errors[:rate]).to include("を入力してください") 
  end

  it "sweetnessがない場合、無効" do
    review = build(:review, sweetness: nil)
    review.valid?
    expect(review.errors[:sweetness]).to include("を入力してください") 
  end

  it "saltyがない場合、無効" do
    review = build(:review, salty: nil)
    review.valid?
    expect(review.errors[:salty]).to include("を入力してください") 
  end

  it "acidityがない場合、無効" do
    review = build(:review, acidity: nil)
    review.valid?
    expect(review.errors[:acidity]).to include("を入力してください") 
  end

  it "tasteがない場合、無効" do
    review = build(:review, taste: nil)
    review.valid?
    expect(review.errors[:taste]).to include("を入力してください") 
  end

  it "scentがない場合、無効" do
    review = build(:review, scent: nil)
    review.valid?
    expect(review.errors[:scent]).to include("を入力してください") 
  end
end
