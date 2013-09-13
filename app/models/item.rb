class Item < ActiveRecord::Base
  [:category_id, :description, :era_id, :price,
    :shop_id, :title, :primary_photo].each do |attr|
    attr_accessible attr
    validates attr, :presence => true
  end
  
  attr_accessible :detail_photo_1, :detail_photo_2, :detail_photo_3, :detail_photo_4, :sold
  
  has_attached_file :primary_photo, :styles => { :list => "170x135#", :thumb => "100x100#" }
  has_attached_file :detail_photo_1, :styles => { :list => "170x135#", :thumb => "100x100#" } 
  has_attached_file :detail_photo_2, :styles => { :list => "170x135#", :thumb => "100x100#" }
  has_attached_file :detail_photo_3, :styles => { :list => "170x135#", :thumb => "100x100#" }
    
  belongs_to :category
  
  belongs_to :era
  
  belongs_to :shop
  
  has_many :item_favorites
          
  has_one :owner,
          :through => :shop,
          :source  => :owner
end
