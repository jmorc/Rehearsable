class CreateQuizzes < ActiveRecord::Migration
  def change
    create_table :quizzes do |t|
      t.string :title, null: false
      t.text :description  
      t.datetime :viewable_time
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :quizzes, :user_id
  end
end