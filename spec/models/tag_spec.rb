require "rails_helper"

RSpec.describe Tag, type: :model do

  it "タグ名がある場合、有効" do
    tag = build(:tag)
    expect(tag).to be_valid
  end

  it "タグ名がない場合、無効" do
    tag = build(:tag, name: nil)
    tag.valid?
    expect(tag.errors[:name]).to include("を入力してください") 
  end

  it "タグ名が重複している場合、無効" do
    first_tag = create(:tag, name: "test_tag")
    second_tag = build(:tag, name: "test_tag")
    second_tag.valid?
    expect(second_tag.errors[:name]).to include("はすでに存在します") 
  end
end
