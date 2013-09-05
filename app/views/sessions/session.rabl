object @user
attributes :id, :username

child(:shop) { attribute *Shop.column_names }
child(:favorite_shops) { attribute *Shop.column_names }
child(:favorite_items) { attribute *Item.column_names }