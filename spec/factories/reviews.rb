FactoryBot.define do
  factory :review do
    association :user, factory: :user
    association :snack
    comment { "test" }
    rate { "1" }
    sweetness { "1" }
    salty { "1" }
    acidity { "1" }
    taste { "1" }
    scent { "1" }
  end
end