# Webcoder

## Project Description

Webcoder is a landing page providing information about web development courses. It includes various functional and visual components to help users learn more about available courses, mentors, and frequently asked questions.

## Implemented Features

- **Fixed Navbar:**
  The navigation bar is fixed at the top of the page and contains links to the main sections of the site.
- **Hero Section:**
  Contains a headline and a brief description of the courses.
  Button to open the enrollment modal window.
- **Loading Spinner:**
  Displayed until the page fully loads.
- **Subscription Section:**
  Newsletter subscription form with email validation.
- **Course Cards:**
  Cards with information about different learning formats (online, blended, and on-campus learning).
  "Read more" buttons to display additional text.
- **Learning Section:**
  Description of foundational web development courses and modern tools.
- **FAQ Section:**
  Accordion with frequently asked questions and answers.
- **Mentors Section:**
  Cards with information about mentors, including their photos, names, and brief biographies.
- **Contact Section:**
  Information on location, phone, and email.
  Embedded interactive Google Map.
- **Enrollment Modal:**
  Registration form with validation for fields (first name, last name, phone, email).

## Tools and Libraries

This project utilizes a variety of tools and libraries to ensure an efficient development process and high-quality code. Below is a list of the main tools and libraries used in this project:

### Version Control

- **Git**: A distributed version control system that tracks changes in source code during software development, enabling multiple developers to work on a project simultaneously.
- **GitHub**: A platform for version control and collaboration, allowing to host and review code, manage projects, and build software alongside millions of developers.
- **gh-pages**: A simple tool to publish files to a gh-pages branch on GitHub.

### Git Hooks

- **husky**: A tool to manage Git hooks, ensuring code quality and consistency before commits.
- **lint-staged**: Runs linters on git staged files to ensure code quality before committing.

### Bundler

- **Vite**: A modern frontend build tool that provides a faster and more efficient development experience.

### Frontend Frameworks

- **Bootstrap**: A comprehensive front-end framework for building responsive, mobile-first sites.
- **bootstrap-icons**: Official open-source SVG icon library for Bootstrap.
- **@popperjs/core**: A library used to manage poppers in web applications (used by Bootstrap for tooltips, popovers, and dropdowns).

### Programming Languages and Preprocessors

- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Sass**: A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).

### Code Quality Tools

- **ESLint**: A static code analysis tool for identifying problematic patterns found in JavaScript code.
- **Prettier**: An opinionated code formatter that enforces a consistent style by parsing code and reprinting it with its own rules.
- **@typescript-eslint/eslint-plugin** and \* **@typescript-eslint/parser**: ESLint plugins and parser that allow ESLint to work with TypeScript code.
- **eslint-config-airbnb-typescript**: Airbnb's ESLint config, adjusted to support TypeScript.
- **eslint-config-prettier** and **eslint-plugin-prettier**: Integrates Prettier with ESLint to bring together formatting and linting.

### CSS Tools

- **autoprefixer**: A tool to parse CSS and add vendor prefixes to CSS rules using values from "Can I Use".
- **modern-normalize**: Normalize browsers' default style.

## Installation and Running

Clone the repository:

```
git clone https://github.com/hannakulikowska/webcoder.git
```

Navigate to the project directory:

```
cd webcoder
```

Install dependencies:

```
npm install
```

Start the project:

```
npm start
```

## Deploy

[Link to the Webcoder website](https://hannakulikowska.github.io/webcoder/)
