User.destroy_all
Park.destroy_all
Pass.destroy_all




puts "Seeding...."


User.create(
  name: "admin",
  password: "admin",
  is_admin: "true"
)

5.times do
  User.create(
    name: Faker::Name.first_name,
    password: "123",
    is_admin: "false"
  )
end


  Pass.create( price: 10.00, user_id: rand(1..5), park_id: 1)
  Pass.create( price: 20.00, user_id: rand(1..5), park_id: 2)
  Pass.create( price: 0.00, user_id: rand(1..5), park_id: 3)
  Pass.create( price: 15.00, user_id: rand(1..5), park_id: 4)
  Pass.create( price: 17.25, user_id: rand(1..5), park_id: 5)
  
puts "...Done seeding"