const Task = require('../models/task');

exports.getAllTask = async (req, res, next) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.createTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.getSingleTask = async (req, res, next) => {
  const { id: taskId } = req.params;
  try {
    const task = await Task.findOne({ _id: taskId });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const { id: taskId } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
