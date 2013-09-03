class CreateItemFavorites < ActiveRecord::Migration
  def change
    create_table :item_favorites do |t|
      t.integer :user_id, :null => false
      t.integer :item_id, :null => false

      t.timestamps
    end
    
    add_index :item_favorites, :user_id
    add_index :item_favorites, [:item_id, :user_id], :unique => true
  end
end
