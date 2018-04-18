FactoryGirl.define do
  factory :message do
    content Faker::Lorem.sentence
    image File.open("#{Rails.root}/spec/images/dog.png")
    user
    group
  end
end
