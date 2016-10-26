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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160521230151) do

  create_table "contacts", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "title"
    t.datetime "last_contacted"
    t.string   "resp_status"
    t.datetime "nas_date"
    t.text     "nas"
    t.string   "company"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.integer  "user_id"
    t.text     "how_met"
    t.text     "contact_link"
  end

  add_index "contacts", ["user_id"], name: "index_contacts_on_user_id"

  create_table "interactions", force: :cascade do |t|
    t.text     "activity"
    t.datetime "activity_date"
    t.integer  "user_id"
    t.integer  "job_id"
    t.integer  "contact_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "subject"
  end

  add_index "interactions", ["contact_id"], name: "index_interactions_on_contact_id"
  add_index "interactions", ["job_id"], name: "index_interactions_on_job_id"
  add_index "interactions", ["user_id"], name: "index_interactions_on_user_id"

  create_table "jobs", force: :cascade do |t|
    t.string   "company"
    t.string   "position"
    t.datetime "app_date"
    t.string   "resp_status"
    t.string   "primary"
    t.datetime "nas_date"
    t.text     "nas"
    t.text     "company_link"
    t.text     "position_link"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "job_id"
    t.string   "job_num"
    t.text     "job_description"
  end

  add_index "jobs", ["job_id"], name: "index_jobs_on_job_id"

  create_table "relationships", force: :cascade do |t|
    t.integer  "job_id"
    t.integer  "contact_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
  end

  add_index "relationships", ["contact_id"], name: "index_relationships_on_contact_id"
  add_index "relationships", ["job_id"], name: "index_relationships_on_job_id"
  add_index "relationships", ["user_id"], name: "index_relationships_on_user_id"

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
