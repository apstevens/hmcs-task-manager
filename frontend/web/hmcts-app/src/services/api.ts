const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/tasks';

export interface Task {
  id?: number;
  title: string;
  description?: string;
  status?: 'pending' | 'in-progress' | 'completed';
  createdAt?: string;
}

export const taskApi = {
  async createTask(task: Omit<Task, 'id' | 'createdAt'>): Promise<Task> {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error(`Failed to create task: ${response.statusText}`);
    }

    return response.json();
  },

  async getTasks(): Promise<Task[]> {
    const response = await fetch(`${API_BASE_URL}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch tasks: ${response.statusText}`);
    }

    return response.json();
  },

  async updateTask(id: number, updates: Partial<Task>): Promise<Task> {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });

    if (!response.ok) {
      throw new Error(`Failed to update task: ${response.statusText}`);
    }

    return response.json();
  },

  async deleteTask(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete task: ${response.statusText}`);
    }
  },
};
