class CreateItemPhotos < ActiveRecord::Migration
  def change
    create_table :item_photos do |t|
      t.attachment :file, :null => false
      t.integer :item_id, :null => false

      t.timestamps
    end
    
    add_index :item_photos, :item_id
  end
end
