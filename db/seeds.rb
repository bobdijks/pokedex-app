require 'json'
require 'rest-client'
require 'open-uri'

url = "https://pokeapi.co/api/v2/pokemon/?offset=100&limit=100"

pokemons = RestClient.get(url)

pokemon_array = JSON.parse(pokemons)

p pokemon_array

# pokemon = Pokemon.create(
#     name: pokemon_array['forms'][0]['name'],
#     type: pokemon_array['types'][0]['type']['name'],
#     ability: pokemon_array['abilities'][0]['ability']['name'],
#     weight: pokemon_array['weight']
#   )
# pokemon.save!

# puts "Created #{Pokemon.count} Pokemons"
