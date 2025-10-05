import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { tasksApi, Task } from '@/lib/api/tasks';
import { useToast } from '@/hooks/use-toast';

export function useTasks(projectId?: string) {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { data: tasks, isLoading } = useQuery({
    queryKey: projectId ? ['tasks', 'project', projectId] : ['tasks'],
    queryFn: () => tasksApi.list(projectId),
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: Task['status'] }) =>
      tasksApi.updateStatus(id, status),
    onMutate: async ({ id, status }) => {
      await queryClient.cancelQueries({ queryKey: ['tasks'] });

      const previousTasks = queryClient.getQueryData(['tasks']);

      queryClient.setQueryData(['tasks'], (old: Task[] | undefined) =>
        old?.map(task => task.id === id ? { ...task, status } : task)
      );

      return { previousTasks };
    },
    onError: (err, variables, context) => {
      if (context?.previousTasks) {
        queryClient.setQueryData(['tasks'], context.previousTasks);
      }
      toast({
        title: 'Error',
        description: 'Failed to update task status',
        variant: 'destructive',
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  const assignMutation = useMutation({
    mutationFn: ({ id, userId }: { id: string; userId: string }) =>
      tasksApi.assign(id, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast({
        title: 'Success',
        description: 'Task assigned successfully',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to assign task',
        variant: 'destructive',
      });
    },
  });

  return {
    tasks,
    isLoading,
    updateTaskStatus: updateStatusMutation.mutate,
    assignTask: assignMutation.mutate,
  };
}
