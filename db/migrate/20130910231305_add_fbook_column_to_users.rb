class AddFbookColumnToUsers < ActiveRecord::Migration
  def change
    add_column :users, :fbook_token, :string
  end
end
