# Lab 11: Server-side templating with EJS

## Resources

- [EJS for server-side templating](http://ejs.co/)
- [ExpressJS docs - app.set](https://expressjs.com/en/4x/api.html#app.set)
- [HTML5 Forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [HTML5 Form Validation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation#Using_built-in_form_validation)
- [Google Books API Documentation](https://developers.google.com/books/docs/v1/getting_started)
- [Superagent](https://visionmedia.github.io/superagent/)

- Book app wireframes
  - [11-results.png](../wireframes/11-results.png)  
  - [11-search.png](../wireframes/11-search.png)  
- Suggestion for a favicon: `https://www.freeiconspng.com/uploads/book-icon--icon-search-engine-6.png`

## Configuration

_Your repository must include the following config files:_

- `.env` - with your PORT. Make sure this file is included in your `.gitignore`
- `README.md` - with documentation regarding your lab and it's current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration, including `express`, `ejs`, and `superagent`
- Note that the `package-lock.json` file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.

```sh
book_app (repository)
├──public
│  └── styles
│      ├── base.css
│      ├── fonts
│      │   ├── icomoon.eot
│      │   ├── icomoon.svg
│      │   ├── icomoon.ttf
│      │   └── icomoon.woff
│      ├── icons.css
│      ├── layout.css
│      ├── modules.css
│      └── reset.css
├──views
│  └── pages
│      ├── error.ejs
│      ├── index.ejs
│      └── searches
│          └── show.ejs
├── .env
├── .eslintrc.json
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

## User Acceptance Tests

### Overview

This week, you and your partner(s) will implement a basic full stack application for a book list which will include the ability to search the Google Books API, add books to a database, and then render those books from a PostgreSQL database. You will also add the ability to update the details of a book or remove it from the collection.

Today's portion of the application involves requesting books from the API. The client can submit a form to search for a book by title or author, and the search results will then be rendered as a list in the browser.

Your entire application will be deployed on Heroku.


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

### Workflow
- We will be using the Trello project management tool for the duration of this project.
- Go to the [Open Book Trello Board](https://trello.com/b/2GAur1IN/open-shelf-a-book-wiki){:target="_blank"}, open the "... Show Menu" link, click the "... More" link, and then click "Copy Board". Before you create it, be sure to "Change" from Private to "Public" (and click "Yes, Make Board Public") so your instructional team can see your work. Now, click "Create" to add a copy to your personal account.
- On the Settings tab, click the "Filter" link to view just the current day
- With your partner, review the user stories and analyze the feature requests and requirements in the lab.
- Within each story, note the acceptance criteria ("Given ... When ... Then...") and the checklist of feature tasks. Be careful to execute tasks in order as they are often dependencies of one another.
- During the day with your partner, check off tasks as you complete them, and move the story cards through the workflow.


### Repository Set-up

- Create a new repository on GitHub named `book_app`. Add your partner as collaborator. Clone this repository into your `301` directory. You will be working in this same repository for labs 11 through 14.

### Heroku deployment

- One person from your group should create an instance on Heroku. You will be working in this same instance for labs 11 through 14.
  - Follow the naming convention of `<partner 1 initials>-<partner 2 initials>-booklist`. For example, Allie and Sam's instance would be named `https://ag-sh-booklist.herokuapp.com` 
- In the Deploy tab, connect your instance to your repository and enable automatic deploys from your master branch. Deploy your application and make sure there are no errors.
- From this point on, work on semantically-named non-master branches. Once your app is functioning correctly on your branch, make a PR to master and confirm functionality on your deployed site. Your deployed site **should not** contain any broken functionality.

### Feature Tasks

See the Trello board for your feature tasks for today's lab.

## Documentation

_Your `README.md` must include:_

```md
# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code 301 class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with GET and POST routes for the book resource.

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
-->
```

## Submission Instructions

- Complete your Feature Tasks for the day (below)
- Create a Pull Request (PR) back to the `master` branch of your repository
- On Canvas, submit a link to your PR, a link to your deployed application on Heroku, and a link to your public Trello board. **Make sure to include the following:**
  - A question within the context of today's lab assignment
  - An observation about the lab assignment, or related 'Ah-hah!' moment
  - How long you spent working on this assignment
