require 'test_helper'

class AnsweredQuestionsControllerTest < ActionController::TestCase
  setup do
    @answered_question = answered_questions(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:answered_questions)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create answered_question" do
    assert_difference('AnsweredQuestion.count') do
      post :create, answered_question: { answer_id: @answered_question.answer_id, quiz_result_id: @answered_question.quiz_result_id }
    end

    assert_redirected_to answered_question_path(assigns(:answered_question))
  end

  test "should show answered_question" do
    get :show, id: @answered_question
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @answered_question
    assert_response :success
  end

  test "should update answered_question" do
    patch :update, id: @answered_question, answered_question: { answer_id: @answered_question.answer_id, quiz_result_id: @answered_question.quiz_result_id }
    assert_redirected_to answered_question_path(assigns(:answered_question))
  end

  test "should destroy answered_question" do
    assert_difference('AnsweredQuestion.count', -1) do
      delete :destroy, id: @answered_question
    end

    assert_redirected_to answered_questions_path
  end
end
