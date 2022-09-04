const Task = require('../models/task');
const asyncWrapper = require('../middleware/async');

exports.getAllTask = asyncWrapper(async (req, res, next) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

exports.createTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.create(req.body);

  res.status(201).json({ task });
});

exports.getSingleTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;

  const task = await Task.findOne({ _id: taskId });

  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskId}` });
  }

  res.status(200).json({ task });
});

exports.updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskId}` });
  }

  res.status(200).json({ task });
});

exports.deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });

  if (!task) {
    return res.status(404).json({ msg: `No task with id: ${taskId}` });
  }

  res.status(200).json({ task });
});
