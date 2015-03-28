class CreateQuizResults < ActiveRecord::Migration
  def change
    create_table :quiz_results do |t|
      t.decimal :score
      t.integer :quiz_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
