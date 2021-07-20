require 'json'
require 'rest-client'
require 'open-uri'

url = 'https://pokeapi.co/api/v2/pokemon/?offset=100&limit=100'

all_pokes = URI(url).read
poke_list = all_pokes

pokemons = JSON.parse(poke_list)

all_urls = pokemons['results']

puts 'Starting the big Pokemon seed'

100.times do |index|
  poke_url = all_urls[index]['url']
  poke_info = URI(poke_url).read
  pokemon_array = JSON.parse(poke_info)
  pokemon = Pokemon.create(
    name: pokemon_array['forms'][0]['name'],
    pokemon_type: pokemon_array['types'][0]['type']['name'],
    ability: pokemon_array['abilities'][0]['ability']['name'],
    weight: pokemon_array['weight']
  )
  photo_url = pokemon_array['sprites']['other']['official-artwork']['front_default']
  pokemon.photo.attach(io: URI.open(photo_url), content_type: 'image/png', filename: "#{pokemon.name}.png")
end

puts "Created #{Pokemon.count} Pokemons"
