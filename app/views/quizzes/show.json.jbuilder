json.(@quiz, :title, :description)

json.questions(@questions) do |question|
  json.(question, :body, :question_type)
end