class Shop < ActiveRecord::Base
  attr_accessible :description, :name, :owner_id
  
  validates :name, :owner_id, :presence => true, :uniqueness => true
  
             
  has_many :items,
           :dependent => :destroy
           
  belongs_to :owner,
             :class_name => "User"
end
