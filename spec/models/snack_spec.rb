require "rails_helper"

RSpec.describe Snack, type: :model do

  it "商品名、アルコールの選択がある場合、有効" do
    snack = build(:snack)
    expect(snack).to be_valid
  end

  it "商品名がない場合、無効" do
    snack = build(:snack, name: nil)
    snack.valid?
    expect(snack.errors[:name]).to include("を入力してください") 
  end

  it "商品名が重複している場合、無効" do
    first_snack = create(:snack, name: "test_snack")
    second_snack = build(:snack, name: "test_snack")
    second_snack.valid?
    expect(second_snack.errors[:name]).to include("はすでに存在します") 
  end

  it "アルコールの選択がない場合、無効" do
    snack = build(:snack, alcohol: nil)
    snack.valid?
    expect(snack.errors[:alcohol]).to include("を入力してください") 
  end
end
