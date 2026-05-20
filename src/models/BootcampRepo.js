const mongoose = require('mongoose');

const listType = ['workout', 'challenge', 'project', 'extra-workout']

const localizedString = {
  es: { type: String, required: true },

  en: { type: String, required: true },
};

const BootcampRepoSchema = new mongoose.Schema(
  {
    title: localizedString,
    summary: localizedString,
    description: localizedString,
    type: { type: String, enum: listType, required: true },
    keyLearning: localizedString,
    takeaways: [localizedString],
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