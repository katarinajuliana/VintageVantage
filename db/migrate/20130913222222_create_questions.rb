class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.integer :item_id, :null => false
      t.integer :user_id, :null => false
      t.string :body, :null => false
      t.string :answer

      t.timestamps
    end
    
    add_index :questions, :item_id
  end
end
