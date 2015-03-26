class Api::QuestionsController < ApplicationController
  before_action :set_question, only: [:show, :update, :destroy]

  respond_to :json

  def index
    @questions = Question.all
    render 'questions/index'
  end

  def show
    render 'questions/show'
  end

  def create
    @quiz = Quiz.find(params[:question][:quiz_id])
    @question = @quiz.questions.new(question_params)
    if @question.save
      render 'questions/show'
    else
      render @question.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @question.update(question_params)
    render 'questions/show'
  end

  def destroy
    @question.destroy
    render 'questions/show'
  end

  private
    def set_question
      @question = Question.find(params[:id])
    end

    def question_params
      params.require(:question).permit(:body, :question_type, :quiz_id)
    end
end
