class Cart < ActiveRecord::Base
  attr_accessible :user_id

  validates :user_id, :presence => true, :uniqueness => true
  
  belongs_to :user
  
  has_many :cart_items
end
