class RenameZipcodeCity < ActiveRecord::Migration
  def change
    rename_column :users, :zipcode, :location
  end
end
