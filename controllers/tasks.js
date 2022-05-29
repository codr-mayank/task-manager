const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});

    res.status(200).json({ tasks });
    // res.status(200).json({ status: 'success', data: { tasks, count: tasks.length } });
  } catch (err) {
    res.status(500).json({ msg: err });
    // res.status(500).json({ status: 'failure', error: err });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(200).json({ task });
    // res.status(201).json({ status: 'success', data: { task } });
  } catch (err) {
    res.status(500).json({ msg: err });
    // res.status(500).json({ status: 'failure', error: err });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findById({ _id: taskId });
    if (!task) {
      return res.status(404).json(`No task found with id ${taskId}`);
      // return res.status(404).json({ status: 'failure', error: { message: `No task found with id ${taskId}` } });
    }

    res.status(200).json({ task });
    // res.status(200).json({ status: 'success', data: { task } });
  } catch (err) {
    res.status(500).json({ msg: err });
    // res.status(500).json({ status: 'failure', error: err });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findByIdAndDelete({ _id: taskId });
    if (!task) {
      return res.status(404).json(`No task found with id ${taskId}`);
      // return res.status(404).json({ status: 'failure', error: { message: `No task found with id ${taskId}` } });
    }

    res.status(200).json({ task });
    // res.status(200).json({ status: 'success', data: null });
  } catch (err) {
    res.status(500).json({ msg: err });
    // res.status(500).json({ status: 'failure', error: err });
  }
};


const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true
    });
    if (!task) {
      return res.status(404).json(`No task found with id ${taskId}`);
      // return res.status(404).json({ status: 'failure', error: { message: `No task found with id ${taskId}` } });
    }

    res.status(200).json({ task });
    // res.status(200).json({ status: 'success', data: { task } });
  } catch (err) {
    res.status(500).json({ msg: err });
    // res.status(500).json({ status: 'failure', error: err });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};
