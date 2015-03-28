Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :answers, except: [:new, :edit, :index]

    resources :quiz_results, except: [:new, :edit, :update] do
      resources :answered_questions, except: [:new, :edit, :update]
    end

    resources :quizzes, except: [:new, :edit] do
      resources :questions, only: [:index] 
    end

    resources :questions, except: [:new, :edit, :index]
  end 

  root to: "site#root"

  devise_for :users, :controllers => { registrations: 'registrations' }

end