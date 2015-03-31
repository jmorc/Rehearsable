json.array!(@answer_results) do |answer_result|
  json.extract! answer_result, :id, :question_id, :quiz_result_id, :answer_id, :selected, :correct
  json.url answer_result_url(answer_result, format: :json)
end
