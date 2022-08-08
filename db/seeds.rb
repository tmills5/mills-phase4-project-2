User.destroy_all
Park.destroy_all
Pass.destroy_all




puts "Seeding...."

5.times do
  User.create!(
    name: Faker::Name.first_name,
    password: "123"
  )
end

10.times do
  Park.create!(
    full_name: Faker::Mountain.name,
    state: Faker::Address.state,
    description: Faker::Lorem.paragraph(sentence_count: 4),
    image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['trails', 'parks', 'mountain'], match_all: true),
    url: Faker::Internet.url
  )
end

20.times do
  Pass.create!(
    price: Faker::Commerce.price(range: 0..10.0, as_string: true),
    user_id: rand(1..5),
    park_id: rand(1..10)
  )
end

puts "...Done seeding"