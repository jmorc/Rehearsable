Rails.application.routes.draw do

  resources :api do
    resources :answers, except: [:new, :edit, :index]

    resources :quizzes do
      resources :questions, only: [:new, :edit] 
    end

    resources :questions, except: [:new, :edit, :index] do 
      resources :answers, only: [:new, :edit]
    end
  end 

  root to: "site#root"

  devise_for :users, :controllers => { registrations: 'registrations' }

end