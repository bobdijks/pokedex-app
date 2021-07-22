class AddPhotoHeightDescriptionToPokemons < ActiveRecord::Migration[6.0]
  def change
    add_column :pokemons, :photo_url, :string
    add_column :pokemons, :height, :integer
    add_column :pokemons, :description, :string
  end
end
