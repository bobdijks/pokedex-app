class ChangePhotoColumnFromPokemons < ActiveRecord::Migration[6.0]
  def change
    remove_column :pokemons, :photo_url, :text
  end
end
