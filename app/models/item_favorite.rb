class ItemFavorite < ActiveRecord::Base
  attr_accessible :item_id, :user_id
  
  validates :item_id, :user_id, :presence => true
  
  validates :item_id, :uniqueness => { :scope => :user_id }
  
  
  belongs_to :item
  
  belongs_to :user
end
