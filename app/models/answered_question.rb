class AnsweredQuestion < ActiveRecord::Base
	belongs_to :question
	belongs_to :quiz_result
end
