require "rails_helper"

RSpec.describe User, type: :system do
  let(:user) { create(:user) }
  let(:other_user) { create(:user) } 

  describe "ログイン前" do
    describe "ユーザー新規登録" do
      context "フォームの入力値が正常" do
        it "ユーザーの新規登録が成功する" do
          visit new_user_path
          fill_in "ユーザー名", with: "User"
          fill_in "メールアドレス", with: "example@example.com"
          fill_in "パスワード", with: "password"
          fill_in "パスワード確認", with: "password"
          click_button "登録"
          expect(current_path).to eq root_path
          expect(page).to have_content "ようこそ！"
        end
      end

      context "メールアドレス見入力" do
        it "ユーザーの新規登録が失敗する" do
          visit new_user_path
          fill_in "ユーザー名", with: "User"
          fill_in "メールアドレス", with: nil
          fill_in "パスワード", with: "password"
          fill_in "パスワード確認", with: "password"
          click_button "登録"
          expect(current_path).to eq users_path
          expect(page).to have_content "※ メールアドレスを入力してください"
        end
      end

      context "登録済メールアドレス" do
        it "ユーザーの新規登録が失敗する" do
          existed_user = create(:user)
          visit new_user_path
          fill_in "ユーザー名", with: "User"
          fill_in "メールアドレス", with: existed_user.email
          fill_in "パスワード", with: "password"
          fill_in "パスワード確認", with: "password"
          click_button "登録"
          expect(current_path).to eq users_path
          expect(page).to have_content "※ メールアドレスはすでに存在します"
          expect(page).to have_field "メールアドレス", with: existed_user.email
        end
      end

    end   
  end
  describe "ログイン後" do
    before { login(user) }
    describe "ユーザー編集"
      
      context "フォームの入力値が正常" do
        it "ユーザーの編集が成功" do
          visit mypage_path(user)
          find(".js-edit-user-button").click
          first(".textarea").set("user")
          all(".textarea")[1].set("test@example.com")
          click_button "更新"
          expect(current_path).to eq mypage_path(user)
        end
      end
      
      context "メールアドレスが未入力" do
        it "ユーザーの編集が失敗" do
          visit mypage_path(user)
          find(".js-edit-user-button").click
          first(".textarea").set("user")
          all(".textarea")[1].set(nil)
          click_button "更新"
          expect(current_path).to eq mypage_path(user)
          expect(page).to have_content "メールアドレスを入力してください"
        end
      end

    end
  end
