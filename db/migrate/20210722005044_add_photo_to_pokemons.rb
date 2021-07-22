class AddPhotoToPokemons < ActiveRecord::Migration[6.0]
  def change
    add_column :pokemons, :photo_url, :text
  end
end
