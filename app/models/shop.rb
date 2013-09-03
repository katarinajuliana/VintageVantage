class Shop < ActiveRecord::Base
  attr_accessible :description, :name, :owner_id
  
  [:name, :owner_id].each do |attr|
    validates attr, :presence => true
    validates attr, :uniqueness => true
  end
  
  # belongs_to :owner,
  #            :class_name => "User"
             
  has_many :items
end
