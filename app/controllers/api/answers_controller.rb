class Api::AnswersController < ApplicationController
  before_action :set_answer, only: [:show, :update, :destroy]

  respond_to :json

  def create
    @answer = Answer.new(answer_params)
    if @answer.save
      render json: @answer
    else
      render @answer.error, status: :unprocessable_entity
    end
  end

  def show
    render json: @answer
  end
  
  def update
    @answer.update(answer_params)
    respond_with(@answer)
  end
 
  def destroy
    @answer.destroy
    respond_with(@answer)
  end

  private
    def set_answer
      @answer = Answer.find(params[:id])
    end

    def answer_params
      params.require(:answer).permit(:body, :question_id, :correct)
    end
end