const express = require('express');
const app = express()
require('dotenv').config()
const cors = require('cors');
const routes = require('./src/routes/bootcampRepoRoutes')
const dbConnection = require('./src/config/db')
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/bootcamp-repos', routes);

dbConnection();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});