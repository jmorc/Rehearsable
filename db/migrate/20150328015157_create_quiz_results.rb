class CreateQuizResults < ActiveRecord::Migration
  def change
    create_table :quiz_results do |t|
      t.decimal :score
      t.integer :quiz_id
      t.integer :user_id
      t.string :answered_question_id

      t.timestamps
    end
  end
end
