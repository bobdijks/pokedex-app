Rails.application.routes.draw do
  root to: 'pages#home'

  resources :pokemons, only: %i[index new show create] do
  end

  # My own poke-api
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :pokemons, only: %i[index show]
    end
  end
end
