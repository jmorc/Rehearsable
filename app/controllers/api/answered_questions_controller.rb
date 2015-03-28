class AnsweredQuestionsController < ApplicationController
  before_action :set_answered_question, only: [:show, :destroy]

  respond_to :json

  def index
    @answered_questions = AnsweredQuestion.all
    render 'answered_questions/index'
  end

  def show
    render 'answered_questions/show' 
  end

  def create
    @answered_question = AnsweredQuestion.new(answered_question_params)
    @answered_question.save
    render 'answered_questions/show'
  end

  def destroy
    @answered_question.destroy
    render 'answered_questions/show'
  end

  private
    def set_answered_question
      @answered_question = AnsweredQuestion.find(params[:id])
    end

    def answered_question_params
      params.require(:answered_question).permit(:quiz_result_id, :answer_id)
    end
end
