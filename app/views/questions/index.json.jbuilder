json.array!(@questions) do |question|
  json.extract! question, :id, :body, :question_type
end
