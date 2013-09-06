class MakePrimeryPhotoNotNull < ActiveRecord::Migration
  def change
    change_column :items, :primary_photo_file_name, :string, { :null => false }
  end
end
