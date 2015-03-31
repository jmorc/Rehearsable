require 'test_helper'

class AnswerResultsControllerTest < ActionController::TestCase
  setup do
    @answer_result = answer_results(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:answer_results)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create answer_result" do
    assert_difference('AnswerResult.count') do
      post :create, answer_result: { answer_id: @answer_result.answer_id, correct: @answer_result.correct, question_id: @answer_result.question_id, quiz_result_id: @answer_result.quiz_result_id, selected: @answer_result.selected }
    end

    assert_redirected_to answer_result_path(assigns(:answer_result))
  end

  test "should show answer_result" do
    get :show, id: @answer_result
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @answer_result
    assert_response :success
  end

  test "should update answer_result" do
    patch :update, id: @answer_result, answer_result: { answer_id: @answer_result.answer_id, correct: @answer_result.correct, question_id: @answer_result.question_id, quiz_result_id: @answer_result.quiz_result_id, selected: @answer_result.selected }
    assert_redirected_to answer_result_path(assigns(:answer_result))
  end

  test "should destroy answer_result" do
    assert_difference('AnswerResult.count', -1) do
      delete :destroy, id: @answer_result
    end

    assert_redirected_to answer_results_path
  end
end
