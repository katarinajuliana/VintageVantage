class CreateShops < ActiveRecord::Migration
  def change
    create_table :shops do |t|
      t.string :name
      t.text :description
      t.integer :owner_id

      t.timestamps
    end
  end
end
