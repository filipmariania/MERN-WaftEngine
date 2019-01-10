const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentSchema = new Schema({
  ContentName: { type: String, required: true },
  Key: { type: String, required: true, unique: true },
  Description: { type: String, required: true },
  PublishFrom: { type: Date, required: false },
  PublishTo: { type: Date, required: false },
  IsActive: { type: Boolean, required: true, default: false },
  IsFeature: { type: Boolean, required: true, default: false },
  IsDeleted: { type: Boolean, required: true, default: false },
  Added_at: { type: Date, default: Date.now },
});

module.exports = Content = mongoose.model('content', ContentSchema);
