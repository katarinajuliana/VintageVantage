class CreatePurchases < ActiveRecord::Migration
  def change
    create_table :purchases do |t|
      t.integer :user_id, :null => false
      t.integer :shop_id, :null => false
      
      t.timestamps
    end
    
    add_index :purchases, :user_id
    add_index :purchases, :shop_id
  end
end
