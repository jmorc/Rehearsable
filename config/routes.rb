Rails.application.routes.draw do

  resources :quizzes do
    resources :questions, only: [:new, :edit] 
  end

  resources :quizzes, except: [:new, :edit, :index]  

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