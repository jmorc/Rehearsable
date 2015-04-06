json.array!(@quizzes) do |quiz|
  json.(quiz, :id, :title, :description)
end