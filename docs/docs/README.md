# Guide

The goal of a tool is to provide minimal task and time management for small teams who can not afford to pay higher monthly rentals for heavy and costly Task and Project Management tools. Small teams should be able to manage projects & tasks with time tracking with minimal & simple collaboration and reporting.

## Installation Guide

Installation of InfyTracker is pretty easy just like any other laravel application.

### Requirements

It is assumed that you have primary knowledge of Laravel installation since this application is built on Laravel. But it's not necessary if you have primary knowledge of PHP and Server Installation.

You can read more about Installation [here](https://laravel.com/docs/5.8).

### Create a project via composer
Clone the repo from Github with the following command.

`composer create-project infyomlabs/infy-tracker -s dev`

### Install npm Dependencies

Install node modules,

`npm install`

### Setup environment

Set up your environment by modifying `.env` file. Database, App, and mail config should be enough with app key. You can also update storage driver if you need. All your attachments will be placed into that.

### Modify default User seeder

The application will create a superuser while setup which will be performed via seeder. Open a file `database/seeds/AdminUserSeeder.php` and modify email and password of the default user.

### Run migrations

Run migrations and seeders

`php artisan migrate --seed`

### Build the project

Build a project with laravel mix. If you are running in dev mode then run

`npm run dev`

Or if you are planning to use in production then run,

`npm run prod`

That's it and you are ready to go.

### Login with default user

You should be able to go to the application and do a login with default username and password which you set up in the seeder.

## Concepts

### Clients
You can manage all of your clients with their basic details under Clients menu.

### Projects
One client may have multiple projects running. so you can manage your projects per client. You can also assign who is working on which projects from your team members. Assign them to the project and they can see those projects only.

### Roles + Permissions
You can manage who can see/manage what based on your needs via creating Roles. Role may have name and set of permissions. The following permissions are available to be used while creating Roles.

- Manage Clients - Can User manage (Add/Update/Delete) Clients list
- Manage Projects - Can User manage Projects list
- Manage Entry - Can User manage all the time entries of any User
- Manage Users - Can User manage Users list
- Manage Tags - Can User manage Tags list
- Manage Activities - Can User manage Activities list under Settings
- Manage Reports - Can User can see all the reports
- Manage Roles - Can User manage Roles list

By default User can see only tasks which are assigned to him from his assigned Projects.

### Team/Users
All your team members can be managed here. Create your team members with desired role that you want to assign him/her.

### Tasks
Tasks are the real important thing. You can create a task for different projects. Task has the following fields,

- Project - project it belongs to (required)
- Title - the title of the task (required)
- Assign To - person who is/are working on this task
- Due Date - due date of the task
- Description - any more details for the task
- Tags - tags on a task which can be useful in reports and filters

### Time Entries
Time entries are useful to track the work that has been done on a particular task. Time entries contain Activity Type, so if multiple people are working on the same task, they can track what kind of activity that has done on task. For e.g., Coding, Documentation, Research, etc.

Time entries can be done two ways, Manual and via Web Timer. Web timer is available to track time automatically. You can select a task and start a timer, once you are done come back and stop the timer and enter the notes about what you've done and it will automatically record a timer entry on that task.

Web timer also works even if you start the timer and then close the tab/browser or you go offline, whenever you are back it will still remember the start time of the task.

### Comments

Any user who has access to task can comment on a Task. Via comments, team can collobrate on tasks with each other and can keep a track of communication happened on a particular task.

### File Management

To communicate in more better ways, Team members can also upload files on Task. You can utlize storage driver feature of Laravel to upload/store files on your choice of platform like Local, S3, FTP etc.

### Reports
Reports are useful for managers and team leader to see who worked on what. Bunch of filters is available like,

- Assigned To
- Project
- Activity
- Task
- Date Interval

Reports will be dynamic and shows the Time spent on various tasks by given filters with very nice Group by data representation.

### Settings
It also provides a few settings.

#### Tags
Tags are useful to tag any task for multiple purposes. Like, Milestone, Sprint, Release, etc. While creating reports this can be useful to see who spent how much in particular Milestone.

#### Activity Types
Activity Types are a type of work that has been done. Like Coding, Peer Reviews, Documentation, Research, etc. You can manage them here as per your need.

## Contribution
Everyone is welcomed to contribute to the project. All bugs and feature ideas are welcomed.

If you find a bug then you can submit an issue to our Github repository. If you know the fix then make a fix and submit a pull request.

If you got a new feature idea then you can also submit a feature request to our Github repository.
