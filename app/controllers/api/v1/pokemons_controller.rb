class Api::V1::PokemonsController < ApplicationController
  def index
    @pokemons = Pokemon.order(:id).page params[:page]
    render json: @pokemons
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render json: @pokemon
  end
end
