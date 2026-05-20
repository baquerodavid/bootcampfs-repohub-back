const mongoose = require('mongoose');
require('dotenv').config();

const BootcampRepo = require('./src/models/BootcampRepo');

const migrateReposToBilingual = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const repos = await BootcampRepo.find();

    for (const repo of repos) {
      repo.title = {
        es: repo.title,
        en: repo.title,
      };

      repo.summary = {
        es: repo.summary,
        en: repo.summary,
      };

      repo.description = {
        es: repo.description,
        en: repo.description,
      };

      repo.keyLearning = {
        es: repo.keyLearning,
        en: repo.keyLearning,
      };

      repo.takeaways = repo.takeaways.map((takeaway) => ({
        es: takeaway,
        en: takeaway,
      }));

      await repo.save();
    }

    console.log('Migración completada');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

migrateReposToBilingual();
