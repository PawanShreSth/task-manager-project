exports.getAllTask = (req, res, next) => {
  res.send('GET ALL TASKS');
};

exports.createTask = (req, res, next) => {
  res.send('CREATE TASK');
};

exports.getSingleTask = (req, res, next) => {
  res.send('SINGLE TASK');
};

exports.updateTask = (req, res, next) => {
  res.send('UPDATE TASK');
};

exports.deleteTask = (req, res, next) => {
  res.send('DELETE TASK');
};
