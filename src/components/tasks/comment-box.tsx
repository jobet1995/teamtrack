"use client";

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Comment {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  time: string;
}

const initialComments: Comment[] = [
  {
    id: '1',
    user: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    content: 'I\'ve started working on the design mockups. Should have the first draft ready by tomorrow.',
    time: '2 hours ago'
  },
  {
    id: '2',
    user: {
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    content: 'Great! Let me know if you need any input on the technical feasibility.',
    time: '1 hour ago'
  }
];

export function CommentBox() {
  const [comments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewComment('');
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Comments</h3>

      <ScrollArea className="h-[200px] pr-4" aria-label="Comments section">
        <div className="space-y-4" role="list" aria-label="Comment list">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-3" role="listitem">
              <Avatar className="h-8 w-8" aria-hidden="true">
                <AvatarImage src={comment.user.avatar} alt={`${comment.user.name} avatar`} />
                <AvatarFallback>
                  {comment.user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium" aria-label={`Comment by ${comment.user.name}`}>{comment.user.name}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400" aria-label={`Posted ${comment.time}`}>{comment.time}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="space-y-2">
        <Textarea
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={3}
          aria-label="Add a new comment"
          aria-describedby="comment-help"
        />
        <div id="comment-help" className="sr-only">
          Type your comment and press Enter or click Post Comment to submit
        </div>
        <div className="flex justify-end">
          <Button type="submit" size="sm" aria-label="Post your comment">
            Post Comment
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CommentBox;