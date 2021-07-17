class PokemonsController < ApplicationController
  def new
    @pokemon = Pokemon.new
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
  end

  def index
    @pokemons = Pokemon.all
  end

  def show
  end

  def listing_params
    params.require(:pokemon).permit(:name, :type, :ability, :weight)
  end
end
