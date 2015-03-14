class AddQuizIdToQuestions < ActiveRecord::Migration
  def change
  	add_column :questions, :quiz_id, :integer
  end
  # add_index :questions, :quiz_id
end
