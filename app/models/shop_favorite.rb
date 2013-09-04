class ShopFavorite < ActiveRecord::Base
  attr_accessible :shop_id, :user_id
  
  validates :shop_id, :user_id, :presence => true
  
  validates :shop_id, :uniqueness => { :scope => :user_id }


  belongs_to :shop  

  belongs_to :user
end