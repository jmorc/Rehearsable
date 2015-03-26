class Api::QuizzesController < ApplicationController
  before_action :set_quiz, only: [:show, :update, :destroy]
  before_action :authenticate_user!
  load_and_authorize_resource
  respond_to :json

  def index
    @quizzes = current_user.quizzes
    render 'quizzes/index'
  end

  def show
    @questions = @quiz.questions
    render 'quizzes/show'
  end

  def create
    @user = current_user
    @quiz = current_user.quizzes.new(quiz_params)
    if @quiz.save
      render 'quizzes/show'
    else 
      render @quiz.errors.full_messages, status: :unprocessable_entity
    end

  end

  def update
    @quiz.update(quiz_params)
    render 'quizzes/show'
  end

  def destroy
    @quiz.destroy
    render 'quizzes/show'
  end

  private
    def set_quiz
      @quiz = Quiz.find(params[:id])
    end

    def quiz_params
      params.require(:quiz).permit(:title, :description, :viewable_time)
    end
end
