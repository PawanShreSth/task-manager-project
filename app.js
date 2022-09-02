const express = require('express');

const taskRouter = require('./routes/tasks');

const app = express();

app.use(express.json());

// routes
app.get('/', (req, res, next) => {
  res.redirect('/api/v1/tasks');
});

app.get('/hello', (req, res, next) => {
  res.send('TASK MANAGER APP');
});

app.use('/api/v1/tasks', taskRouter);

const PORT = 3000;

app.listen(PORT, console.log(`Server is listening on Port ${PORT}`));
