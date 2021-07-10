Rails.application.routes.draw do
  root to: 'pages#home'
  get 'about', to: 'pages#about'
  resources :pokemons, only: [:index, :new, :show, :create] do
  end
end
