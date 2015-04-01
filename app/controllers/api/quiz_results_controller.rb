class Api::QuizResultsController < ApplicationController
  before_action :set_quiz_result, only: [:show, :destroy]

  respond_to :json

  def index
    @quiz_results = QuizResult.all
    render 'quiz_results/index'
  end

  def show
    render 'quiz_results/show'
  end

  def new
    @quiz_result = QuizResult.new
    render 'quiz_results/show'
  end
  
  def create
    @quiz_result = current_user.quiz_results.new(quiz_result_params)
    if @quiz_result.save
      render 'quiz_results/show'
    else
      render @quiz_result.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @quiz_result.destroy
    render 'quiz_results/show'
  end

  private
    def set_quiz_result
      @quiz_result = QuizResult.find(params[:id])
    end

    def quiz_result_params
      params.require(:quiz_result).permit(:score, :quiz_id, :user_id, :answered_question_id)
    end
end
