class Purchase < ActiveRecord::Base
  attr_accessible :user_id, :shop_id, :total
  
  validates :user_id, :shop_id, :total, :presence => true
  
  belongs_to :user
  
  belongs_to :shop
  
  has_many :purchase_items
  
  has_many :items,
           :through => :purchase_items,
           :source => :item
end
