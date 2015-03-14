class AddQuestionTypeToQuestion < ActiveRecord::Migration
  def change
  	add_column :questions, :question_type, :string
  	remove_column :questions, :type
  end
end
