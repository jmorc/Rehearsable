json.(@quiz, :title, :description)

json.questions(@questions) do |question|
  json.(question, :body, :question_type)

  json.answers(question.answers) do |answer|
    json.(answer, :body, :question_id, :correct)
  end
end