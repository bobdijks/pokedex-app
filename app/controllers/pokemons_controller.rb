class PokemonsController < ApplicationController
  def new
    @pokemon = Pokemon.new
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
  end

  def index
  end

  def show
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:name, :pokemon_type, :ability, :weight, :photo_url, :height, :moves)
  end
end
