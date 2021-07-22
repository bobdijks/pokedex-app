class RemoveDescriptionFromPokemons < ActiveRecord::Migration[6.0]
  def change
    remove_column :pokemons, :description, :string
  end
end
