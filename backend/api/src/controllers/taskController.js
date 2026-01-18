import {
  createTask as createTaskService,
  getAllTasks as getAllTasksService,
  getTaskById as getTaskByIdService,
  updateTask as updateTaskService,
  deleteTask as deleteTaskService
} from '../services/taskService.js';

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await getAllTasksService();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const task = await getTaskByIdService(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch task' });
  }
};

export const createTask = async (req, res) => {
  try {
    const created = await createTaskService(req.body);
    res.status(201).json(created);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Failed to create task' });
  }
};

export const updateTask = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const updatedTask = await updateTaskService(id, req.body);
    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const deleted = await deleteTaskService(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};
