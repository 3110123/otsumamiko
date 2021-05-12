Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'static_pages#home'
  get 'login', to: 'user_sessions#new'
  post 'login', to: 'user_sessions#create'
  delete 'logout', to: 'user_sessions#destroy'
  get 'choice', to: 'alcohol_choices#index'
  get 'result', to: 'snacks#result'
  resources :users, only: %i[new create show]
  resources :snacks do
    resources :reviews, shallow: true
    resource :bookmarks, only: %i[create destroy]
    collection do
      get 'wine', to: 'snacks#wine'
      get 'beer', to: 'snacks#beer'
      get 'sake', to: 'snacks#sake'
    end
  end
end
