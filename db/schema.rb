ActiveRecord::Schema.define(version: 2021_07_17_194553) do
  create_table 'pokemons', force: :cascade do |t|
    t.string 'name'
    t.string 'string'
    t.string 'type'
    t.string 'ability'
    t.integer 'weight'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
  end
end
