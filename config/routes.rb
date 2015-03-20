Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :answers, except: [:new, :edit, :index]

    resources :quizzes, except: [:new, :edit] do
      resources :questions, only: [:index] 
    end

    resources :questions, except: [:new, :edit, :index] do 
      # resources :answers, only: [:new, :edit]
    end
  end 

  root to: "site#root"

  devise_for :users, :controllers => { registrations: 'registrations' }

end