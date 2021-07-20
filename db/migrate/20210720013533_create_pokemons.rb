class CreatePokemons < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :pokemon_type
      t.string :ability
      t.integer :weight

      t.timestamps
    end
  end
end
