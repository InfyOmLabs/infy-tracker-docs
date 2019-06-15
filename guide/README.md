# Guide

**This project is still under development and not recommended for production use.**

Here is getting started guide with InfyTracker. The goal of a tool is to provide minimal task and time management for small teams. Small teams should be able to manage projects of clients with tasks and time tracking on tasks. It also provides basic reporting with various filters.

## Installation Guide
Installation of InfyTracker is pretty easy just like any other laravel application.

### Clone the repo

Clone the repo from Github with the following command.

`git clone git@github.com:InfyOmLabs/infy-tracker.git`

### Install Dependencies

Install composer dependecies by,

`composer install`

Install node modules,

`npm install`

### Setup environment

Copy `.env.example` as `.env` and set up your environment. Nothing special, just database, app, and mail config should be enough with app key.

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
Manage all of your clients.

### Projects
Projects can be managed here. One client may have multiple projects running. so you can manage your projects per client. You can also assign who is working on which projects.

### Team/User Management
You can manage your team. Create your team members into the system from here.

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

Web timer also works even if you start the timer and then close the tab/browser, whenever you are back it will still remember the start time of the task.

### Reports (Beta)
Reports are useful for managers and team leader to see who worked on what. Bunch of filters is available like,

- Assigned To
- Project
- Activity
- Task
- Date Interval

**This Feature is still in beta and major improvements are coming soon.**

### Settings
It also provides a few settings.

#### Tags
Tags are useful to tag any task for multiple purposes. Like, Milestone, Sprint, Release, etc. While creating reports this can be useful to see who spent how much in particular Milestone.

#### Activity Types
Activity Types are a type of work that has been done. Like Coding, Peer Reviews, Documentation, Research, etc. You can manage them here as per your need.

## Roadmap

This app is still in beta and under development. You can check/track a roadmap [here](https://trello.com/b/dRa3gaMR/infy-tracker).

## Contribution
Everyone is welcomed to contribute to the project. All bugs and feature ideas are welcomed.

If you find a bug then you can submit an issue to our Github repository. If you know the fix then make a fix and submit a pull request.

If you got a new feature idea then you can also submit a feature request to our Github repository.