json.extract! @quiz_result, :id, :score, :quiz_id, 
                            :user_id, :created_at, :updated_at

json.quiz(@quiz, :id, :title, :description)

json.answer_results(@answer_results) do |answer_result|
  json.(answer_result, :id, :question_id, :quiz_result_id, 
                       :answer_id, :selected, :correct)
  json.(answer_result.question, :question_type)
  json.(answer_result.answer, :body, :note)
end
  
json.questions(@questions) do |question|
    json.(question, :body, :question_type, :id)
end

