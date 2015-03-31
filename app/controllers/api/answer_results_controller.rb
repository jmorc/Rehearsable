class AnswerResultsController < ApplicationController
  before_action :set_answer_result, only: [:show, :destroy]

  respond_to :json

  def show
    render 'answer_result/show'
  end

  def create
    @answer_result = AnswerResult.new(answer_result_params)
    @answer_result.save
    render 'answer_result/show'
  end

  def destroy
    @answer_result.destroy
    render 'answer_result/show'
  end

  private
    def set_answer_result
      @answer_result = AnswerResult.find(params[:id])
    end

    def answer_result_params
      params.require(:answer_result).permit(:question_id, :quiz_result_id, :answer_id, :selected, :correct)
    end
end
