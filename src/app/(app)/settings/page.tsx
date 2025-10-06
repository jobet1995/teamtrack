"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [taskAssignments, setTaskAssignments] = useState(true);
  const [projectUpdates, setProjectUpdates] = useState(true);
  const [comments, setComments] = useState(true);
  const [projectVisibility, setProjectVisibility] = useState('team');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Settings</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-1">
          Manage your account settings and preferences
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle><h2>Notification Preferences</h2></CardTitle>
          <CardDescription>Choose how you want to be notified</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <p id="email-notifications-desc" className="text-sm text-slate-500 dark:text-slate-400">
                Receive notifications via email
              </p>
            </div>
            <Switch
              id="email-notifications"
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
              aria-describedby="email-notifications-desc"
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="push-notifications">Push Notifications</Label>
              <p id="push-notifications-desc" className="text-sm text-slate-500 dark:text-slate-400">
                Receive push notifications in your browser
              </p>
            </div>
            <Switch
              id="push-notifications"
              checked={pushNotifications}
              onCheckedChange={setPushNotifications}
              aria-describedby="push-notifications-desc"
            />
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Notification Types</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="task-assignments">Task Assignments</Label>
                  <p id="task-assignments-desc" className="text-sm text-slate-500 dark:text-slate-400">
                    When you are assigned to a task
                  </p>
                </div>
                <Switch
                  id="task-assignments"
                  checked={taskAssignments}
                  onCheckedChange={setTaskAssignments}
                  aria-describedby="task-assignments-desc"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="project-updates">Project Updates</Label>
                  <p id="project-updates-desc" className="text-sm text-slate-500 dark:text-slate-400">
                    Updates on projects you&apos;re involved in
                  </p>
                </div>
                <Switch
                  id="project-updates"
                  checked={projectUpdates}
                  onCheckedChange={setProjectUpdates}
                  aria-describedby="project-updates-desc"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="comments">Comments</Label>
                  <p id="comments-desc" className="text-sm text-slate-500 dark:text-slate-400">
                    When someone comments or mentions you
                  </p>
                </div>
                <Switch
                  id="comments"
                  checked={comments}
                  onCheckedChange={setComments}
                  aria-describedby="comments-desc"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle><h2>Project Settings</h2></CardTitle>
          <CardDescription>Configure your project preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="project-visibility">Default Project Visibility</Label>
            <Select value={projectVisibility} onValueChange={setProjectVisibility}>
              <SelectTrigger aria-label="Default Project Visibility">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="private">Private - Only you</SelectItem>
                <SelectItem value="team">Team - Your team members</SelectItem>
                <SelectItem value="organization">Organization - Everyone in organization</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Choose who can see your projects by default
            </p>
          </div>

          <div className="flex justify-end">
            <Button aria-label="Save your preferences">Save Preferences</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-red-200 dark:border-red-900">
        <CardHeader>
          <CardTitle><h2 className="text-red-600 dark:text-red-400">Danger Zone</h2></CardTitle>
          <CardDescription>Irreversible actions for your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
            <div>
              <p className="font-medium text-slate-900 dark:text-white">Delete Account</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Permanently delete your account and all data
              </p>
            </div>
            <Button variant="destructive" aria-label="Permanently delete your account and all data">Delete Account</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
