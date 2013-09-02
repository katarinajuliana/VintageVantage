class Item < ActiveRecord::Base
  [:category_id, :description, :era_id, :price, :shop_id, :title].each do |attr|
    attr_accessible attr
    validates attr, :presence => true
  end
  
  # belongs_to :shop
  # belongs_to :category
  # belongs_to :era
end
