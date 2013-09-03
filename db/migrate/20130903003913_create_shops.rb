class CreateShops < ActiveRecord::Migration
  def change
    create_table :shops do |t|
      t.string :name, :null => false
      t.text :description
      t.integer :owner_id, :null => false

      t.timestamps
    end
    
    add_index :shops, :owner_id, :unique => true
  end
end
