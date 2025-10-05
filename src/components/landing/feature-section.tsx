import { Kanban, SquareCheck as CheckSquare, Users, Bell } from 'lucide-react';
import { FeatureCard } from './feature-card';

const features = [
  {
    icon: Kanban,
    title: 'Project Management',
    description: 'Organize projects with powerful boards, lists, and cards. Visualize your workflow and track progress at a glance.'
  },
  {
    icon: CheckSquare,
    title: 'Task Tracking',
    description: 'Break down projects into manageable tasks. Set deadlines, assign team members, and monitor completion status.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with real-time updates, comments, and mentions. Keep everyone on the same page.'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Stay informed with intelligent notifications. Get updates on what matters most without the noise.'
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Powerful features designed to help teams collaborate, stay organized, and deliver exceptional results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;