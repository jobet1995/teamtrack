import { cn } from '@/lib/utils';

interface SimpleProgressProps {
  value: number;
  className?: string;
}

export function SimpleProgress({ value, className }: SimpleProgressProps) {
  return (
    <div className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}>
      <div
        className="h-full bg-primary transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
