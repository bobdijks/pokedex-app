Rails.application.routes.draw do
  root to: 'pages#home'
  resources :pokemons, only: %i[index new show create] do
  end
end
