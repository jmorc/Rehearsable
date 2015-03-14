class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.text :body, null: false
      t.integer :ord
      t.string :type

      t.timestamps
    end
  end
end
