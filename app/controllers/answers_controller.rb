class Api::AnswersController < ApplicationController
  before_action :set_answer, only: [:show, :edit, :update, :destroy]

  respond_to :json

  def index
    @answers = Answer.all
    render json: @answers
  end

  def show
    render json: @answer
  end

  def new
    @answer = Answer.new
    respond_with(@answer)
  end

  def edit
  end

  def create
    @answer = Answer.new(answer_params)
    @answer.save
    respond_with(@answer)
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
