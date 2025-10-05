import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CircleCheck as CheckCircle2 } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300">
                Project Management Reimagined
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              Manage Projects with{' '}
              <span className="text-blue-600 dark:text-blue-400">Confidence</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
              Streamline your workflow, collaborate seamlessly with your team, and deliver projects on time. Everything you need in one powerful platform.
            </p>

            <ul className="space-y-3">
              {['Intuitive Kanban boards', 'Real-time collaboration', 'Advanced analytics'].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link href="/register">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href="/login">Sign In</Link>
              </Button>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              No credit card required • Free 14-day trial
            </p>
          </div>

          <div className="relative lg:h-[600px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-slate-100 dark:from-blue-950/30 dark:to-slate-900/30 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs text-slate-400">Dashboard</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">24</div>
                    <div className="text-xs text-blue-700 dark:text-blue-300">Active Projects</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <div className="text-2xl font-bold text-green-900 dark:text-green-100">86%</div>
                    <div className="text-xs text-green-700 dark:text-green-300">Completion Rate</div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  {[
                    { name: 'Website Redesign', progress: 75, color: 'bg-blue-500' },
                    { name: 'Mobile App Launch', progress: 45, color: 'bg-green-500' },
                    { name: 'Marketing Campaign', progress: 90, color: 'bg-orange-500' }
                  ].map((project) => (
                    <div key={project.name} className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-700 dark:text-slate-300">{project.name}</span>
                        <span className="text-slate-500 dark:text-slate-400">{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${project.color} transition-all duration-500`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>s
      </div>
    </section>
  );
}

export default HeroSection;