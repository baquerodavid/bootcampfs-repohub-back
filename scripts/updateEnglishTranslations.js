const mongoose = require('mongoose');
require('dotenv').config();

const BootcampRepo = require('../src/models/BootcampRepo');
const translatedRepos = require('./bootcamprepos-bilingual-translated.json');

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log('MongoDB connected');

    for (const repo of translatedRepos) {
      const cleanTakeaways = repo.takeaways.map((takeaway) => ({
        es: takeaway.es,
        en: takeaway.en,
      }));

      await BootcampRepo.findOneAndUpdate(
        { slug: repo.slug },
        {
          $set: {
            'title.en': repo.title.en,
            'summary.en': repo.summary.en,
            'description.en': repo.description.en,
            'keyLearning.en': repo.keyLearning.en,
            takeaways: cleanTakeaways,
          },
        },
        { new: true },
      );

      console.log(`Updated EN translations: ${repo.slug}`);
    }

    console.log('English translations updated successfully');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

run();
