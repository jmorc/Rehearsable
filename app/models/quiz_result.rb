class QuizResult < ActiveRecord::Base
	belongs_to :quiz
	belongs_to :user
	has_many :answered_questions
end
