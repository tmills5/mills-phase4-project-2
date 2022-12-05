User.destroy_all
Park.destroy_all
Pass.destroy_all




puts "Seeding...."
activities = ["Biking", "Camping", "Fishing", "Hunting", "Hiking", "Rafting", "Birding", "Photography"]


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


# Park.create(
#   full_name: "Ala Kahakai National Historic Trail", 
#   state: "HI", 
#   description: "Established in 2000 to preserve, protect and interpret traditional Native Hawaiian culture and natural resources, Ala Kahakai National Historic Trail is a 175 mile corridor encompassing a network of culturally and historically significant trails. This 'trail by the sea' traverses wahi pana (storied landscapes), ancient Hawaiian sites and over 200 ahupuaʻa (traditional land divisions). Connect now!", 
#   activities: activities.sample(5).join(', '), 
#   image: "https://www.nps.gov/common/uploads/structured_data/317D3E74-B539-A668-469F5AFB6CD52961.jpg", 
#   url: "https://www.nps.gov/alka/index.htm")

# Park.create(
#   full_name: "Big Thicket National Preserve",
#   state: "TX",
#   description: "Life of all types abounds in the Big Thicket. This national preserve protects the incredible diversity of life found where multiple habitats converge in southeast Texas. Hiking trails and waterways meander through nine different ecosystems, from longleaf pine forests to cypress-lined bayous. It is a place of discovery, a place to wander and explore, a place to marvel at the richness of nature.",
#   activities: activities.sample(2).join(', '),
#   image: "https://www.nps.gov/bith/learn/images/IMG_3421-5.JPG?maxwidth=1200&maxheight=1200&autorotate=false",
#   url: "https://www.nps.gov/bith/index.htm"
# )

# Park.create(
#   full_name: "Black Canyon Of The Gunnison National Park",
#   state: "CO",
#   description: "Big enough to be overwhelming, still intimate enough to feel the pulse of time, Black Canyon of the Gunnison National Park exposes you to some of the steepest cliffs, oldest rock, and craggiest spires in North America. With two million years to work, the Gunnison River, along with the forces of weathering, has sculpted this vertical wilderness of rock, water, and sky.",
#   activities: activities.sample(5).join(', '),
#   image: "https://www.nps.gov/common/uploads/structured_data/3C81655F-1DD8-B71B-0B4BCFFDB74EE723.jpg",
#   url: "https://www.nps.gov/blca/index.htm"
# )

# Park.create!(
#   full_name: "Biscayne National Park",
#   state: "FL",
#   description: "Within sight of Miami, yet worlds away, Biscayne protects a rare combination of aquamarine waters, emerald islands, and fish-bejeweled coral reefs. Evidence of 10,000 years of human history is here too; from prehistoric tribes to shipwrecks, and pineapple farmers to presidents. For many, the park is a boating, fishing, and diving destination, while others enjoy a warm breeze and peaceful scenery.",
#   activities: activities.sample(4).join(', '),
#   image: "https://www.nps.gov/common/uploads/structured_data/E789390E-C7B5-2B1F-13974FC0EA9C7BD6.jpg",
#   url: "https://www.nps.gov/bisc/index.htm"
# )

# Park.create(  
#   full_name: "Boston Harbor Islands National Recreation Area",
#   state: "MA",
#   description: "A place where you can walk a Civil War-era fort, visit historic lighthouses, explore tide pools, hike lush trails, camp under the stars, or relax while fishing, picnicking or swimming-all within reach of downtown Boston. Youth programs, visitor services, research, wildlife management, and more are coordinated on the park's 34 islands and peninsulas by the Boston Harbor Islands Partnership.",
#   activities: activities.sample(3).join(', '),
#   image: "https://www.nps.gov/common/uploads/structured_data/3C858E65-1DD8-B71B-0B1107E16289DA49.jpg",
#   url: "https://www.nps.gov/boha/index.htm"
# )



  Pass.create( price: 10.00, user_id: rand(1..5), park_id: 1)
  Pass.create( price: 20.00, user_id: rand(1..5), park_id: 2)
  Pass.create( price: 0.00, user_id: rand(1..5), park_id: 3)
  Pass.create( price: 15.00, user_id: rand(1..5), park_id: 4)
  Pass.create( price: 17.25, user_id: rand(1..5), park_id: 5)
  
puts "...Done seeding"