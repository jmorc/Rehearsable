class Api::QuestionsController < ApplicationController
  before_action :set_question, only: [:show :update, :destroy]

  respond_to :json

  def index
    @questions = Question.all
    render json: @questions
  end

  def show
    render json: @question
  end

  def create
    @quiz = Quiz.find(params[:question][:quiz_id])
    @question = @quiz.questions.new(question_params)
    if @question.save
      render json: @question
    else
      render @question.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @question.update(question_params)
    render json: @question
  end

  def destroy
    @question.destroy
    render json: @question
  end

  private
    def set_question
      @question = Question.find(params[:id])
    end

    def question_params
      params.require(:question).permit(:body, :question_type, :quiz_id)
    end
end
