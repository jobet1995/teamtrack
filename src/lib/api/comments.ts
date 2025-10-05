export interface Comment {
    id: string;
    content: string;
    taskId: string;
    user: {
      name: string;
      avatar: string;
    };
    createdAt: string;
  }
  
  export const commentsApi = {
    fetch: async (taskId: string): Promise<Comment[]> => {
      const response = await fetch(`/api/tasks/${taskId}/comments`);
      if (!response.ok) throw new Error('Failed to fetch comments');
      return response.json();
    },
  
    add: async (taskId: string, content: string) => {
      const response = await fetch(`/api/tasks/${taskId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      });
      if (!response.ok) throw new Error('Failed to add comment');
      return response.json();
    },
  };
  