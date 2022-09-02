const express = require('express');

const taskRouter = require('./routes/tasks');

const app = express();

// routes
app.get('/', (req, res, next) => {
  res.redirect('/hello');
});

app.get('/hello', (req, res, next) => {
  res.send('TASK MANAGER APP');
});

app.use('/api/v1/tasks', taskRouter);

const PORT = 3000;

app.listen(PORT, console.log(`Server is listening on Port ${PORT}`));
