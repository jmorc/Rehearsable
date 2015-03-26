class Api::AnswersController < ApplicationController
  before_action :set_answer, only: [:show, :update, :destroy]

  respond_to :json

  def create
    @answer = Answer.new(answer_params)
    if @answer.save
      render 'answer/show'
    else
      render @answer.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    render 'answer/show'
  end
  
  def update
    @answer.update(answer_params)
    render 'answer/show'
  end
 
  def destroy
    @answer.destroy
    render 'answer/show'
  end

  private
    def set_answer
      @answer = Answer.find(params[:id])
    end

    def answer_params
      params.require(:answer).permit(:body, :question_id, :correct)
    end
end