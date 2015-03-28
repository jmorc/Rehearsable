class CreateAnsweredQuestions < ActiveRecord::Migration
  def change
    create_table :answered_questions do |t|
      t.integer :quiz_result_id, null: false
      t.integer :answer_id, null: false
      t.text    :body

      t.timestamps
    end
  end
end
