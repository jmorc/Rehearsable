class DropPatients < ActiveRecord::Migration
  def change
  	drop_table :patients
  	drop_table :clinics
  	drop_table :items
  end
end
