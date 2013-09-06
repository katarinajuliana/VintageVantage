class AddPhotosToItem < ActiveRecord::Migration
  def change
    add_attachment :items, :primary_photo
    add_attachment :items, :detail_photo_1
    add_attachment :items, :detail_photo_2
    add_attachment :items, :detail_photo_3
    add_attachment :items, :detail_photo_4
  end
end
