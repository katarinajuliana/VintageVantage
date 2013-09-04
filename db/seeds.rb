# Item.create!(:title => "50's Bowling Shirt",
#             :price => 35, :era_id => 7, :shop_id => 1,
#             :category_id => 15,
#             :description => "Super cute! Chain-stiched name on front: Helen. 
#             Sponser printed on back: Schuster Construction Co.
#             I don't know what Helen's bowling score was, but her fashion was a 300.")
#             
# Item.create!(:title => "Lava Lamp",
#             :price => 5, :era_id => 9, :shop_id => 1,
#             :category_id => 7,
#             :description => "Classic purple lava lamp. Get your groove on.")
# 
# Item.create!(:title => "Mad Men Tumbler Set",
#             :price => 20, :era_id => 8, :shop_id => 1,
#             :category_id => 8,
#             :description => "Drink like Don Draper with this classy glassware set")

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