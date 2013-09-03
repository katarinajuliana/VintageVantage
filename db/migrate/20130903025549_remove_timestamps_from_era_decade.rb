class RemoveTimestampsFromEraDecade < ActiveRecord::Migration
  def change
    remove_column :eras, :created_at
    remove_column :eras, :updated_at
    remove_column :categories, :created_at
    remove_column :categories, :updated_at
  end
end
