Rails.application.routes.draw do
  resources :applicants
  resources :jobs
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
