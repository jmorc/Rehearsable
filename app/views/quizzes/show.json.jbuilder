json.(@quiz, :title, :description)

json.questions(@questions) do |question|
  json.(question, :body, :question_type, :id)

  json.answers(question.answers) do |answer|
    json.(answer, :id, :body, :question_id, :correct)
  end
end