class Shop < ActiveRecord::Base
  attr_accessible :description, :name, :owner_id
  
  validates :name, :owner_id, :presence => true, :uniqueness => true
    
  belongs_to :owner,
             :class_name => "User"
             
  has_many :items,
           :dependent => :destroy
end
