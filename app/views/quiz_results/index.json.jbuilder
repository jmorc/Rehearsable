json.array!(@quiz_results) do |quiz_result|
  json.extract! quiz_result, :id, :score, :quiz_id, :user_id, :answered_question_id
  json.url quiz_result_url(quiz_result, format: :json)
end
