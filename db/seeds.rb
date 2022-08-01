# User.destroy_all
# Park.destroy_all
# Review.destroy_all




puts "Seeding...."

5.times do
  User.create!(
    name: Faker::Name.first_name,
    password: "123"
  )
end

10.times do
  Park.create!(
    full_name: Faker::Science.scientist,
    state: Faker::Address.state,
    description: Faker::Lorem.paragraph(sentence_count: 4),
    image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['planets']),
    url: Faker::Internet.url
  )
end

20.times do
  Review.create!(
    content: Faker::Lorem.paragraph(sentence_count: 1),
    user_id: rand(1..5),
    park_id: rand(1..10)
  )
end

puts "...Done seeding"