class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title, :null => false
      t.integer :price, :null => false
      t.integer :era_id, :null => false
      t.text :description, :null => false
      t.integer :shop_id, :null => false
      t.integer :category_id, :null => false

      t.timestamps
    end
    
    add_index :items, :era_id
    add_index :items, :category_id
    add_index :items, :shop_id
  end
end
