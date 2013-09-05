object @user
attributes :id, :username

node(:shop) { |user| user.shop ? user.shop.id : nil }