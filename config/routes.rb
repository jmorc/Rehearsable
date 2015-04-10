Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index]
    resources :answers, except: [:new, :edit, :index]
    resources :answer_results, except: [:new, :edit, :index, :update]

    resources :quiz_results, except: [:new, :edit, :update] 

    resources :quizzes, except: [:new, :edit] do
      resources :questions, only: [:index] 
    end

    resources :questions, except: [:new, :edit, :index]
  end 

  authenticated :user do
    root to: "site#root", as: :authenticated_root
  end

  root to: redirect('users/sign_in')

  devise_for :users, :controllers => { registrations: 'registrations' }
end