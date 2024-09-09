const mongoose = require('mongoose');

const crmUserSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  crmType: { type: String, required: true },
  accessToken: { type: String },
  refreshToken: { type: String },
  tokenExpiry: { type: Date },
});

module.exports = mongoose.model('CrmUser', crmUserSchema);
