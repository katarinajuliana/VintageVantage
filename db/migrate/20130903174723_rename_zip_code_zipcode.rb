class RenameZipCodeZipcode < ActiveRecord::Migration
  def change
    rename_column :users, :zip_code, :zipcode
  end
end
