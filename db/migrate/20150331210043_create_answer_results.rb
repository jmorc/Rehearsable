class CreateAnswerResults < ActiveRecord::Migration
  def change
    create_table :answer_results do |t|
      t.integer :question_id, null: false
      t.integer :quiz_result_id, null: false
      t.integer :answer_id, null: false
      t.boolean :selected
      t.boolean :correct

      t.timestamps
    end

    add_index :answer_results, :question_id
    add_index :answer_results, :quiz_result_id
    add_index :answer_results, :answer_id
  end
end
