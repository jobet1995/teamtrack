export interface Task {
    id: string;
    title: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
    status: 'todo' | 'in-progress' | 'done';
    assignee: {
      name: string;
      avatar: string;
    };
    dueDate: string;
    projectId?: string;
  }
  
  export const tasksApi = {
    list: async (projectId?: string): Promise<Task[]> => {
      const url = projectId ? `/api/tasks?projectId=${projectId}` : '/api/tasks';
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch tasks');
      return response.json();
    },
  
    updateStatus: async (id: string, status: Task['status']) => {
      const response = await fetch(`/api/tasks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) throw new Error('Failed to update task status');
      return response.json();
    },
  
    assign: async (id: string, userId: string) => {
      const response = await fetch(`/api/tasks/${id}/assign`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });
      if (!response.ok) throw new Error('Failed to assign task');
      return response.json();
    },
  };
  