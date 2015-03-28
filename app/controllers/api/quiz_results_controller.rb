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
    @quiz_result = QuizResult.new(quiz_result_params)
    @quiz_result.save
    render 'quiz_results/show'
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
