class CreateEras < ActiveRecord::Migration
  def change
    create_table :eras do |t|
      t.string :decade, :null => false

      t.timestamps
    end
  end
end
