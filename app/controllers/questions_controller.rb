class API::QuestionsController < ApplicationController
  before_action :set_question, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @questions = Question.all
    respond_with(@questions)
  end

  def show
    respond_with(@question)
  end

  def new
    @quiz = Quiz.find(params[:quiz_id])
    @question = Question.new
    respond_with(@question)
  end

  def edit
    @quiz = @question.quiz
    respond_with(@question)
  end

  def create
    @quiz = Quiz.find(params[:question][:quiz_id])
    @question = @quiz.questions.new(question_params)
    @question.save
    redirect_to @question.quiz
  end

  def update
    @question.update(question_params)
    redirect_to @question.quiz
  end

  def destroy
    @question.destroy
    redirect_to @question.quiz
  end

  private
    def set_question
      @question = Question.find(params[:id])
    end

    def question_params
      params.require(:question).permit(:body, :question_type, :quiz_id)
    end
end
