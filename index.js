require('dotenv').config();
require('express-async-errors');

const xss = require('xss-clean');
const cors = require('cors');
const express = require('express');
const app = express();

const connectDB = require('./db/connect');

const allRoutes = require('./routes/index');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
app.use(cors());

app.use('/api/v1/isma/', allRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4444;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
