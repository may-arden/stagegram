# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_04_062512) do

  create_table "collections", force: :cascade do |t|
    t.string "name"
    t.string "user"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "opera_collections", force: :cascade do |t|
    t.integer "opera_id", null: false
    t.integer "collection_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["collection_id"], name: "index_opera_collections_on_collection_id"
    t.index ["opera_id"], name: "index_opera_collections_on_opera_id"
  end

  create_table "operas", force: :cascade do |t|
    t.string "title"
    t.string "director"
    t.string "description"
    t.string "img_src"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "opera_collections", "collections"
  add_foreign_key "opera_collections", "operas"
end
