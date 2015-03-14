json.array!(@answers) do |answer|
  json.extract! answer, :id, :body, :question_id, :correct
  json.url answer_url(answer, format: :json)
end
