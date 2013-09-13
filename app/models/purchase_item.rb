class PurchaseItem < ActiveRecord::Base
  attr_accessible :purchase_id, :item_id

  validates :purchase_id, :item_id, :presence => true
  
  validates :item_id, :uniqueness => true
  
  belongs_to :purchase
  
  belongs_to :item
end
