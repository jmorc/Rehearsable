class Answer < ActiveRecord::Base
	has_many :answer_results
	belongs_to :question
end