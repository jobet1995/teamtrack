import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bell, CircleCheck as CheckCircle2, CircleAlert as AlertCircle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NotificationItemProps {
  id: string;
  type: 'info' | 'warning' | 'success';
  title: string;
  message: string;
  time: string;
  unread: boolean;
  onMarkAsRead?: (id: string) => void;
}

const typeConfig = {
  info: {
    icon: Info,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-950/50',
    badgeVariant: 'secondary' as const,
    badgeText: 'Info'
  },
  warning: {
    icon: AlertCircle,
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-50 dark:bg-orange-950/50',
    badgeVariant: 'outline' as const,
    badgeText: 'Warning'
  },
  success: {
    icon: CheckCircle2,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-50 dark:bg-green-950/50',
    badgeVariant: 'default' as const,
    badgeText: 'Success'
  }
};

export function NotificationItem({
  id,
  type,
  title,
  message,
  time,
  unread,
  onMarkAsRead
}: NotificationItemProps) {
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <Card className={cn(
      "transition-colors",
      unread && "border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20"
    )}>
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className={cn("rounded-full p-2 h-fit", config.bgColor)}>
              <Icon className={cn("h-5 w-5", config.color)} />
            </div>
            <Badge variant={config.badgeVariant} className="text-xs">
              {config.badgeText}
            </Badge>
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {message}
                </p>
              </div>
              {unread && (
                <div className="flex items-center gap-1 mt-2">
                  <Bell className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                  <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">{time}</span>
              {unread && onMarkAsRead && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onMarkAsRead(id)}
                  className="h-7 text-xs"
                >
                  Mark as read
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default NotificationItem;
