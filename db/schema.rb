# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130911202744) do

  create_table "cart_items", :force => true do |t|
    t.integer  "cart_id",    :null => false
    t.integer  "item_id",    :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "cart_items", ["cart_id", "item_id"], :name => "index_cart_items_on_cart_id_and_item_id", :unique => true
  add_index "cart_items", ["item_id"], :name => "index_cart_items_on_item_id"

  create_table "carts", :force => true do |t|
    t.integer  "user_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "carts", ["user_id"], :name => "index_carts_on_user_id", :unique => true

  create_table "categories", :force => true do |t|
    t.string "title", :null => false
  end

  create_table "eras", :force => true do |t|
    t.string "decade", :null => false
  end

  create_table "friendly_id_slugs", :force => true do |t|
    t.string   "slug",                         :null => false
    t.integer  "sluggable_id",                 :null => false
    t.string   "sluggable_type", :limit => 40
    t.datetime "created_at"
  end

  add_index "friendly_id_slugs", ["slug", "sluggable_type"], :name => "index_friendly_id_slugs_on_slug_and_sluggable_type", :unique => true
  add_index "friendly_id_slugs", ["sluggable_id"], :name => "index_friendly_id_slugs_on_sluggable_id"
  add_index "friendly_id_slugs", ["sluggable_type"], :name => "index_friendly_id_slugs_on_sluggable_type"

  create_table "item_favorites", :force => true do |t|
    t.integer  "user_id",    :null => false
    t.integer  "item_id",    :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "item_favorites", ["item_id", "user_id"], :name => "index_item_favorites_on_item_id_and_user_id", :unique => true
  add_index "item_favorites", ["user_id"], :name => "index_item_favorites_on_user_id"

  create_table "item_photos", :force => true do |t|
    t.string   "file_file_name"
    t.string   "file_content_type"
    t.integer  "file_file_size"
    t.datetime "file_updated_at"
    t.string   "{:null=>false}_file_name"
    t.string   "{:null=>false}_content_type"
    t.integer  "{:null=>false}_file_size"
    t.datetime "{:null=>false}_updated_at"
    t.integer  "item_id",                     :null => false
    t.datetime "created_at",                  :null => false
    t.datetime "updated_at",                  :null => false
  end

  add_index "item_photos", ["item_id"], :name => "index_item_photos_on_item_id"

  create_table "items", :force => true do |t|
    t.string   "title",                                          :null => false
    t.integer  "price",                                          :null => false
    t.integer  "era_id",                                         :null => false
    t.text     "description",                                    :null => false
    t.integer  "shop_id",                                        :null => false
    t.integer  "category_id",                                    :null => false
    t.datetime "created_at",                                     :null => false
    t.datetime "updated_at",                                     :null => false
    t.string   "primary_photo_file_name",                        :null => false
    t.string   "primary_photo_content_type"
    t.integer  "primary_photo_file_size"
    t.datetime "primary_photo_updated_at"
    t.string   "detail_photo_1_file_name"
    t.string   "detail_photo_1_content_type"
    t.integer  "detail_photo_1_file_size"
    t.datetime "detail_photo_1_updated_at"
    t.string   "detail_photo_2_file_name"
    t.string   "detail_photo_2_content_type"
    t.integer  "detail_photo_2_file_size"
    t.datetime "detail_photo_2_updated_at"
    t.string   "detail_photo_3_file_name"
    t.string   "detail_photo_3_content_type"
    t.integer  "detail_photo_3_file_size"
    t.datetime "detail_photo_3_updated_at"
    t.boolean  "sold",                        :default => false, :null => false
  end

  add_index "items", ["category_id"], :name => "index_items_on_category_id"
  add_index "items", ["era_id"], :name => "index_items_on_era_id"
  add_index "items", ["shop_id"], :name => "index_items_on_shop_id"

  create_table "shop_favorites", :force => true do |t|
    t.integer  "user_id",    :null => false
    t.integer  "shop_id",    :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "shop_favorites", ["shop_id", "user_id"], :name => "index_shop_favorites_on_shop_id_and_user_id", :unique => true
  add_index "shop_favorites", ["user_id"], :name => "index_shop_favorites_on_user_id"

  create_table "shops", :force => true do |t|
    t.string   "name",        :null => false
    t.text     "description"
    t.integer  "owner_id",    :null => false
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.string   "slug"
  end

  add_index "shops", ["owner_id"], :name => "index_shops_on_owner_id", :unique => true
  add_index "shops", ["slug"], :name => "index_shops_on_slug", :unique => true

  create_table "users", :force => true do |t|
    t.string   "email",           :null => false
    t.string   "username",        :null => false
    t.string   "password_digest", :null => false
    t.string   "location"
    t.string   "session_token",   :null => false
    t.text     "about"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
    t.string   "slug"
    t.string   "fbook_token"
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["session_token"], :name => "index_users_on_session_token"
  add_index "users", ["slug"], :name => "index_users_on_slug", :unique => true
  add_index "users", ["username"], :name => "index_users_on_username", :unique => true

end
