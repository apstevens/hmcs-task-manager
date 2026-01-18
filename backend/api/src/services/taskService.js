import prisma from '../prisma.js';

export async function createTask(data) {
  return await prisma.task.create({
    data: {
      title: data.title,
      description: data.description,
      status: data.status
    }
  });
}

export async function getAllTasks() {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });
}

export async function getTaskById(id) {
  return await prisma.task.findUnique({
    where: { id }
  });
}

export async function updateTask(id, data) {
  try {
    return await prisma.task.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        status: data.status
      }
    });
  } catch (error) {
    if (error.code === 'P2025') {
      return null;
    }
    throw error;
  }
}

export async function deleteTask(id) {
  try {
    await prisma.task.delete({
      where: { id }
    });
    return true;
  } catch (error) {
    if (error.code === 'P2025') {
      return false;
    }
    throw error;
  }
}
