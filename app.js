const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./db/connect');

const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

const taskRouter = require('./routes/tasks');

const app = express();

app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/v1/tasks', taskRouter);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is listening on Port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
})();
