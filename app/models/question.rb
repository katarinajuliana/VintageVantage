class Question < ActiveRecord::Base
  attr_accessible :answer, :body, :item_id, :user_id
  
  validates :body, :item_id, :user_id, :presence => true
  
  belongs_to :item
  
  belongs_to :user
end
