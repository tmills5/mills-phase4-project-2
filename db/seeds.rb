User.destroy_all


puts "Seeding...."

5.times do
  User.create!(
    name: Faker::Name.first_name,
    password: "123"
  )
end

puts "...Done seeding"