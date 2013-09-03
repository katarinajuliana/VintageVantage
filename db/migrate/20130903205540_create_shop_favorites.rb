class CreateShopFavorites < ActiveRecord::Migration
  def change
    create_table :shop_favorites do |t|
      t.integer :user_id, :null => false
      t.integer :shop_id, :null => false

      t.timestamps
    end
    
    add_index :shop_favorites, :user_id
    add_index :shop_favorites, [:shop_id, :user_id], :unique => true
  end
end
