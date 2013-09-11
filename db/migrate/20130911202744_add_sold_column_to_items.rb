class AddSoldColumnToItems < ActiveRecord::Migration
  def change
    add_column :items, :sold, :boolean, :default => false, :null => false
  end
end
