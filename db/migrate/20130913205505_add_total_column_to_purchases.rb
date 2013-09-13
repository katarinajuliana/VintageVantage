class AddTotalColumnToPurchases < ActiveRecord::Migration
  def change
    add_column :purchases, :total, :integer, :null => false
  end
end
