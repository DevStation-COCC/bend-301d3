# Lab 09: Advanced Topics

## Resources

[SQL Syntax Cheatsheet](./cheatsheets/sql.md)

[PostgreSQL Shell Cheatsheet](./cheatsheets/postgres-shell.md)

[PostgreSQL Docs](https://www.postgresql.org/docs/)

[Yelp API Docs](https://www.yelp.com/developers/documentation/v3/business_search)

[The Movie DB API Docs](https://developers.themoviedb.org/3/getting-started/introduction)

[Hiking Project API Docs](https://www.hikingproject.com/data)

## Configuration

- `.env` - with your PORT and API keys. Make sure this file is in your `.gitignore` so your keys are not pushed to GitHub.
- `README.md` - with documentation regarding your lab and its current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration
- Note that the `package-lock.json` file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.

```sh
lab-09-repository
   ├── data
   |    └── schema.sql
   ├── .env
   ├── .eslintrc.json
   ├── .gitignore
   ├── package-lock.json
   ├── package.json
   └── server.js
   ├── modules
   |    └── location.js
   |    └── weather.js
     
```

## User Acceptance Tests

### Overview

For this lab assignment, you will use the latitude and longitude to request information about movies related to the area, yelp info, and hiking trails and campgrounds near the location.

You'll be using modularization and functional programming principles to refactor and modularize this application for readability

### Time Estimate

For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```
Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
```

Add this information to your README.

### Repository set-up

- One person from your group should create a new repository on GitHub called `lab-09-back-end`. Add your partner(s) as collaborator(s). Clone your repository.
- Follow the same code review process as lab 8.

### Heroku Deployment

- Once your app is functioning correctly on your master branch, deploy your back end to Heroku in the same manner as labs 6, 7, and 8. Create a new Heroku instance with your new partner(s) today. Your deployed site **should not** contain any broken functionality. 
- You will also need to provision a SQL database on Heroku, as you did in lab 8.
- As you continue to work on features, make sure to check out your master branch and pull the changes after each pull request is merged. Then, create a new branch from your master branch and continue working. You may now begin your feature tasks for lab 9.

### Feature Tasks

See the Trello board for your feature tasks for today's lab.

## Documentation

_Your `README.md` must include:_

```md
# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource.

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
-->
```

## Submission Instructions

1. Complete your Feature Tasks for the lab
1. Create a PR back to the `master` branch of your repository, and merge it cleanly.
1. On Canvas, submit a link to your PR. Add a comment in your Canvas assignment which includes the following:
    - A link to the deployed version of your latest code.
    - A link to your public Trello board.
    - A question within the context of today's lab assignment
    - An observation about the lab assignment, or related 'Ah-hah!' moment
    - How long you spent working on this assignment
