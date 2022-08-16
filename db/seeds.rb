# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Location.destroy_all
Tradesman.destroy_all
Job.destroy_all



#Making locations
20.times {Location.create(name: Faker::Address.state,
                        distance_away: Faker::Number.number(digits: 4))}

#Making tradesmen                      
15.times {Tradesman.create(name: Faker::TvShows::RickAndMorty.character,
                           field_of_work: Faker::Construction.trade,
                           avatar: Faker::Avatar.image(size: "150x200", set: "set3"))}

#Making jobs                         
20.times {Job.create(name: Faker::Job.employment_type,
                         tradesman: Tradesman.all.sample, 
                         location: Location.all.sample)}

                        