json.array!(@questions) do |question|
  json.extract! question, :id, :name, :type
  json.url question_url(question, format: :json)
end
