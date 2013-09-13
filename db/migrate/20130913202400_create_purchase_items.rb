class CreatePurchaseItems < ActiveRecord::Migration
  def change
    create_table :purchase_items do |t|
      t.integer :purchase_id, :null => false
      t.integer :item_id, :null => false
      
      t.timestamps
    end
    
    add_index :purchase_items, :purchase_id
    add_index :purchase_items, :item_id, :unique => true
  end
end
