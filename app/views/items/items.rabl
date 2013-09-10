collection @items
attribute *Item.column_names

node(:shopName) do |item|
  item.shop.name
end

node(:shopUrl) do |item|
  shop_url(item.shop)
end
  
node(:listPhoto) do |item|
 item.primary_photo.url(:list)
end

node(:favItem) do |item|
  current_user && current_user.favorite_items.include?(item)
end