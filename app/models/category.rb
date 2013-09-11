class Category < ActiveRecord::Base
  attr_accessible :title
  validates :titel, :presence => true
  
  has_many :items
end
