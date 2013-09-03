# Item.create(:title => "50's Bowling Shirt",
#             :price => 35, :era_id => 8, :shop_id => 1,
#             :category_id => 3,
#             :description => "Super cute, chainstiched name on front, sponser on back")
#             
# Item.create(:title => "Pendleton 49er Jacket",
#             :price => 50, :era_id => 7, :shop_id => 1,
#             :category_id => 3,
#             :description => "Plaid wool, buttons up the front")
# 
# Item.create(:title => "Mad Men Tumbler Set",
#             :price => 20, :era_id => 9, :shop_id => 1,
#             :category_id => 5,
#             :description => "Drink like Don Draper with this classy glassware set")
# 
# ["1700s", "1800s", "1900-1909", "1910s", "1920s", "1930s", "1940s", "1950s",
#   "1960s", "1970s", "1980s"].each do |decade|
#     Era.create!(:decade => decade)
#   end
# 
# ["Accessories", "Art", "Bags & Purses", "Books", "Books", "Electronics",
#   "Furniture", "Home Decor", "Housewares", "Jewelry", "Kids", "Men's Clothing",
#   "Miscellaneous", "Toys", "Paper Ephemera", "Women's Clothing"].each do |category|
#     Category.create!(:title => category)
#   end