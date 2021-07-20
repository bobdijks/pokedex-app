class CreatePokemons < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :string
      t.string :type
      t.string :ability
      t.integer :weight

      t.timestamps
    end
  end
end
