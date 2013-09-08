class Remove4thDetailPhotoColumn < ActiveRecord::Migration
  def up
    remove_column :items, :detail_photo_4_file_name
    remove_column :items, :detail_photo_4_content_type
    remove_column :items, :detail_photo_4_file_size
    remove_column :items, :detail_photo_4_updated_at
  end
end
