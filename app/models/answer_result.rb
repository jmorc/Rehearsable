class AnswerResult < ActiveRecord::Base
	belongs_to :answer
	belongs_to :quiz_result
	belongs_to :question
end
