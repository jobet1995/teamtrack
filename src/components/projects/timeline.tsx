import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface TimelineEvent {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  time: string;
}

const events: TimelineEvent[] = [
  {
    id: '1',
    user: {
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    action: 'moved "Implement Navigation" to In Progress',
    time: '10 minutes ago'
  },
  {
    id: '2',
    user: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    action: 'added a comment on "Design Homepage Mockup"',
    time: '1 hour ago'
  },
  {
    id: '3',
    user: {
      name: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    action: 'created task "Database Schema"',
    time: '2 hours ago'
  },
  {
    id: '4',
    user: {
      name: 'Anna Williams',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    action: 'completed "User Research"',
    time: '3 hours ago'
  }
];

export function Timeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-6">
            {events.map((event, index) => (
              <div key={event.id} className="flex gap-3">
                <div className="relative">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={event.user.avatar} alt={event.user.name} />
                    <AvatarFallback>
                      {event.user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {index < events.length - 1 && (
                    <div className="absolute left-4 top-8 w-px h-6 bg-slate-200 dark:bg-slate-800" />
                  )}
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm">
                    <span className="font-medium">{event.user.name}</span>{' '}
                    <span className="text-slate-600 dark:text-slate-400">{event.action}</span>
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export default Timeline;