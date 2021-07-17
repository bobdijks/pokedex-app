ActiveRecord::Schema.define(version: 2021_07_10_171851) do
  create_table "pokemons", force: :cascade do |t|
    t.string "name"
    t.string "type"
    t.text "description"
    t.string "ability"
    t.integer "weight"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end
end
