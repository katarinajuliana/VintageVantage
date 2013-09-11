class CartItem < ActiveRecord::Base
  attr_accessible :cart_id, :item_id
  
  validates :cart_id, :item_id, :presence => true
  
  validates :item_id, :uniqueness => { :scope => :cart_id }
  
  belongs_to :cart
  
  belongs_to :item
end
