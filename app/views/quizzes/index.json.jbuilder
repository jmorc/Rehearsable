json.array!(@quizzes) do |quiz|
  json.(quiz, :title, :description)
end