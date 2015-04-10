class AddNoteToAnswer < ActiveRecord::Migration
  def change
  	add_column :answers, :note, :string
  end
end
