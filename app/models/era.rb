class Era < ActiveRecord::Base
  attr_accessible :decade
  validates :decade, :presence => true
  
  has_many :items
end
