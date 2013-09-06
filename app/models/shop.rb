class Shop < ActiveRecord::Base
  extend FriendlyId
  
  attr_accessible :description, :name, :owner_id
  
  validates :name, :owner_id, :presence => true, :uniqueness => true
  
  friendly_id :name, :use => :slugged
             
  has_many :items,
           :dependent => :destroy
           
  belongs_to :owner,
             :class_name => "User"
end
