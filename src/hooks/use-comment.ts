import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { commentsApi, Comment } from '@/lib/api/comments';
import { useToast } from '@/hooks/use-toast';

export function useComments(taskId: string) {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { data: comments, isLoading } = useQuery({
    queryKey: ['comments', taskId],
    queryFn: () => commentsApi.fetch(taskId),
    enabled: !!taskId,
  });

  const addMutation = useMutation({
    mutationFn: (content: string) => commentsApi.add(taskId, content),
    onMutate: async (content) => {
      await queryClient.cancelQueries({ queryKey: ['comments', taskId] });

      const previousComments = queryClient.getQueryData(['comments', taskId]);

      const optimisticComment: Comment = {
        id: 'temp-' + Date.now(),
        content,
        taskId,
        user: {
          name: 'You',
          avatar: '',
        },
        createdAt: new Date().toISOString(),
      };

      queryClient.setQueryData(['comments', taskId], (old: Comment[] | undefined) =>
        [...(old || []), optimisticComment]
      );

      return { previousComments };
    },
    onError: (err, variables, context) => {
      if (context?.previousComments) {
        queryClient.setQueryData(['comments', taskId], context.previousComments);
      }
      toast({
        title: 'Error',
        description: 'Failed to add comment',
        variant: 'destructive',
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', taskId] });
    },
  });

  return {
    comments,
    isLoading,
    addComment: addMutation.mutate,
    isAdding: addMutation.isPending,
  };
}
