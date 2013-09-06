class AddSlugColumns < ActiveRecord::Migration
  def change
    add_column :users, :slug, :string
    add_column :shops, :slug, :string
    
    add_index :users, :slug, :unique => true
    add_index :shops, :slug, :unique => true
  end
end
