class DropCartandCartItemTables < ActiveRecord::Migration
  def change
    drop_table :carts
    drop_table :cart_items
  end
end
