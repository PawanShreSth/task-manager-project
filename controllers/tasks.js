const Task = require('../models/task');

exports.getAllTask = (req, res, next) => {
  res.send('GET ALL TASKS');
};

exports.createTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.errors.name.message, error });
  }
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
