const mongoose = require('mongoose');

const listType = ['workout', 'challenge', 'project', 'extra-workout']

const BootcampRepoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    summary: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, enum: listType, required: true },
    keyLearning: { type: String, required: true },
    takeaways: [{ type: String, required: true }],
    tags: [{ type: String, required: true }],
    urlRepo: { type: String, required: true },
    urlApp: { type: String },
    slug: { type: String },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const BootcampRepo = mongoose.model('BootcampRepo', BootcampRepoSchema);

module.exports = BootcampRepo;