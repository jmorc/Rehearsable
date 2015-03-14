Rails.application.routes.draw do

  resources :answers, except: [:new, :edit, :index]

  resources :quizzes do
    resources :questions, only: [:new, :edit] 
  end

  resources :questions, except: [:new, :edit, :index] do 
    resources :answers, only: [:new, :edit]
  end 

  resources :items, except: [:new, :edit, :index]

  resources :patients, except: [:new, :edit, :index] do
    resources :items, only: [:new, :edit]
  end

  resources :clinics do 
    resources :patients, only: [:new, :edit]
  end

  root to: "quizzes#index"

  devise_for :users, :controllers => { registrations: 'registrations' }

end