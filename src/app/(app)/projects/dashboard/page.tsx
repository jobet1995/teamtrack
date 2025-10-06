import { FolderKanban, SquareCheck as CheckSquare, CircleCheck as CheckCircle2, Users } from 'lucide-react';
import { DashboardCard } from '@/components/dashboard/dashboard-card';
import { ActivityFeed } from '@/components/dashboard/activity-feed';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-1">
          Welcome back! Here&apos;s an overview of your projects and tasks.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Projects"
          value={24}
          icon={FolderKanban}
          description="from last month"
          trend={{ value: 12, isPositive: true }}
        />
        <DashboardCard
          title="Active Tasks"
          value={87}
          icon={CheckSquare}
          description="from last week"
          trend={{ value: 8, isPositive: true }}
        />
        <DashboardCard
          title="Completed Tasks"
          value={156}
          icon={CheckCircle2}
          description="from last month"
          trend={{ value: 23, isPositive: true }}
        />
        <DashboardCard
          title="Team Members"
          value={12}
          icon={Users}
          description="from last month"
          trend={{ value: 2, isPositive: true }}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ActivityFeed />
        </div>

        <div className="space-y-6">
          <h2 className="sr-only">Dashboard Overview</h2>
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6">
            <h3 className="font-semibold mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600 dark:text-slate-400">Project Completion</span>
                  <span className="font-medium">86%</span>
                </div>
                <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: '86%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600 dark:text-slate-400">Task Efficiency</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600 dark:text-slate-400">Team Collaboration</span>
                  <span className="font-medium">78%</span>
                </div>
                <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
