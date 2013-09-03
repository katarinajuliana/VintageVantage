class Era < ActiveRecord::Base
  attr_accessible :decade
  
  has_many :items
end
