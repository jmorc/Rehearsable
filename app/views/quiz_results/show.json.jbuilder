json.extract! @quiz_result, :id, :score, :quiz_id, 
                            :user_id, :created_at, :updated_at

json.quiz(@quiz, :id, :title, :description)

json.answer_results(@answer_results) do |answer_result|
  json.(answer_result, :id, :question_id, :quiz_result_id, 
                       :answer_id, :selected, :correct)
end
  
json.questions(@questions) do |question|
    json.(question, :body, :question_type, :id)

  json.answers(question.answers) do |answer|
    json.(answer, :id, :body, :question_id, :correct)
  end
end

