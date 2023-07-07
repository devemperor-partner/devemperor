const mongoose = require("mongoose");
const connect_db = require("./db_connector");
connect_db("connected to user database");
require("./user");

const app_information_schema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },

  app_name: {
    type: String,
    required: true,
  },
  mobile_app_category: String,
  Would_you_need_a_website_for_this_app_later: String,
  Do_you_want_this_mobile_app_to_be_made_available_on_playstore: String,
  What_is_your_budget_for_this_project: String,
  Mobile_Operating_System: String,
  What_is_your_business_about: String,
  Why_do_you_need_a_mobile_app: String,
  Who_is_your_target_audience: String,
  what_will_make_this_mobile_app_stand_out_the_competition: String,
  who_are_your_top_competitors: String,
  What_would_you_like_to_have_on_your_mobile_app_regarding_to_branding_and_styling:
    String,
  sample_link: String,
  Organization_Name: String,
  Organization_Phone_Number: String,
  Personal_Phone_Number: String,
  Whatsapp_Number: String,
  charge: Number,
  development_status: {
    type: String,
    enum: ["PENDING", "IN DEVELOPMENT", "PRODUCTION"],
    required: true,
    default: "PENDING",
  },
});

const App_information = mongoose.model(
  "app_informations",
  app_information_schema,
);
module.exports = App_information;
