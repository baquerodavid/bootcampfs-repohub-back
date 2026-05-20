const mongoose = require('mongoose');
require('dotenv').config();

const BootcampRepo = require('../src/models/BootcampRepo');

const migrateReposToBilingual = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const repos = await BootcampRepo.find().lean();

    for (const repo of repos) {
      await BootcampRepo.updateOne(
        { _id: repo._id },
        {
          $set: {
            title: {
              es:
                typeof repo.title === 'string'
                  ? repo.title
                  : repo.title?.es || '',
              en:
                typeof repo.title === 'string'
                  ? repo.title
                  : repo.title?.en || repo.title?.es || '',
            },
            summary: {
              es:
                typeof repo.summary === 'string'
                  ? repo.summary
                  : repo.summary?.es || '',
              en:
                typeof repo.summary === 'string'
                  ? repo.summary
                  : repo.summary?.en || repo.summary?.es || '',
            },
            description: {
              es:
                typeof repo.description === 'string'
                  ? repo.description
                  : repo.description?.es || '',
              en:
                typeof repo.description === 'string'
                  ? repo.description
                  : repo.description?.en || repo.description?.es || '',
            },
            keyLearning: {
              es:
                typeof repo.keyLearning === 'string'
                  ? repo.keyLearning
                  : repo.keyLearning?.es || '',
              en:
                typeof repo.keyLearning === 'string'
                  ? repo.keyLearning
                  : repo.keyLearning?.en || repo.keyLearning?.es || '',
            },
            takeaways: Array.isArray(repo.takeaways)
              ? repo.takeaways.map((takeaway) => ({
                  es:
                    typeof takeaway === 'string'
                      ? takeaway
                      : takeaway?.es || '',
                  en:
                    typeof takeaway === 'string'
                      ? takeaway
                      : takeaway?.en || takeaway?.es || '',
                }))
              : [],
          },
        },
      );
    }

    console.log('Migración completada correctamente');
    process.exit(0);
  } catch (error) {
    console.error('Error en la migración:', error);
    process.exit(1);
  }
};

migrateReposToBilingual();
