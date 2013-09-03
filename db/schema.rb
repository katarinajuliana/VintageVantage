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

ActiveRecord::Schema.define(:version => 20130903025549) do

  create_table "categories", :force => true do |t|
    t.string "title", :null => false
  end

  create_table "eras", :force => true do |t|
    t.string "decade", :null => false
  end

  create_table "items", :force => true do |t|
    t.string   "title",       :null => false
    t.integer  "price",       :null => false
    t.integer  "era_id",      :null => false
    t.text     "description", :null => false
    t.integer  "shop_id",     :null => false
    t.integer  "category_id", :null => false
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  add_index "items", ["category_id"], :name => "index_items_on_category_id"
  add_index "items", ["era_id"], :name => "index_items_on_era_id"
  add_index "items", ["shop_id"], :name => "index_items_on_shop_id"

  create_table "shops", :force => true do |t|
    t.string   "name",        :null => false
    t.text     "description"
    t.integer  "owner_id",    :null => false
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  add_index "shops", ["owner_id"], :name => "index_shops_on_owner_id", :unique => true

  create_table "users", :force => true do |t|
    t.string   "email",           :null => false
    t.string   "username",        :null => false
    t.string   "password_digest", :null => false
    t.integer  "zip_code",        :null => false
    t.string   "session_token",   :null => false
    t.text     "about_me"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["session_token"], :name => "index_users_on_session_token"
  add_index "users", ["username"], :name => "index_users_on_username", :unique => true

end
