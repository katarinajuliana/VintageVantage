class RemoveNotNullOfLocation < ActiveRecord::Migration
  def change
    change_column :users, :location, :string, :null => true
  end
end
