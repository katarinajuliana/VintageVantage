class RenameMiscColumn < ActiveRecord::Migration
  def change
    rename_column :categories, :miscellaneous, :knick_knacks
  end
end
