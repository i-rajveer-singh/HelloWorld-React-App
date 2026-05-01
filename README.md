# React Learning Project (BridgeLabz UC Implementation)

## Overview

This project is a structured implementation of core React concepts based on a Use Case (UC) driven approach. Each UC represents a specific concept or feature in React, starting from basic application setup to routing and component structuring.

The project follows a strict Git Flow methodology to ensure clean version control, modular development, and clear traceability of each feature implementation.

---

## Objectives

* Learn React fundamentals through hands-on implementation
* Understand component-based architecture
* Practice data binding, event handling, and state management
* Implement routing using react-router-dom
* Follow industry-standard Git workflows
* Maintain clean and modular code structure

---

## Project Structure

The project is divided into multiple Use Cases (UCs), where each UC focuses on a specific concept:

### UC1: Hello World Application

* Create a basic React app
* Display static text: "Hello from BridgeLabz"

### UC2: One-Way Data Binding

* Implement interpolation using state
* Display dynamic data in JSX

### UC3: Property Binding

* Bind image source dynamically
* Display BridgeLabz logo using component state

### UC4: Event Binding

* Handle user interaction (click event)
* Open external URL in a new tab

### UC5: User Input Handling

* Accept input from user
* Update UI dynamically using state

### UC6: Input Validation

* Validate user input (minimum 3 characters, initial caps)
* Display error messages for invalid input

### UC7: Styling and Layout

* Apply global CSS styling
* Build a complete UI page with structured layout

### UC8: Routing Setup

* Create a Home component
* Configure routing using react-router-dom

### UC9: Component-Based Navigation

* Display content through routing
* Integrate Home component with application flow

---

## Git Workflow

### Branch Strategy

* main:

  * Contains only README.md
  * No development code

* develop:

  * Integration branch for all completed UCs

* feature branches:

  * Each UC is developed in a separate branch
  * Naming convention:
    feature/UC-<short-description>

### Example Branch Names

* feature/UC-helloworld
* feature/UC-data-binding
* feature/UC-event-binding

---

## Development Process

1. Start from develop branch
2. Create a feature branch for a UC
3. Implement the UC independently
4. Commit changes using defined format
5. Push feature branch to GitHub
6. Merge feature branch into develop
7. Do not delete feature branches after merge

---

## Commit Message Convention

Format:
[prajwal]:UC<UC-number>:<short-description>

Examples:

* [prajwal]:UC1:Created Hello World React App
* [prajwal]:UC4:Added click event for navigation
* [prajwal]:UC6:Implemented input validation

This ensures:

* Clear tracking of work
* Easy identification of features
* Maintainable commit history

---

## Technologies Used

* React.js
* JavaScript (ES6+)
* HTML5 and CSS3
* react-router-dom
* Git and GitHub

---

## Key Concepts Covered

* Functional Components
* JSX
* State Management
* Event Handling
* Conditional Rendering
* Form Handling
* Data Binding
* Routing
* Component Reusability

---

## Folder Structure (Typical)

* src/

  * components/
  * App.js
  * index.js
  * styles/
* public/
* package.json

---

## Expected Outcome

* A fully functional React application built step-by-step
* Clear understanding of React fundamentals
* Clean Git history with feature-based development
* Scalable and maintainable project structure

---

## Notes

* Each UC is independently implemented and testable
* Code is kept simple and beginner-friendly
* Feature branches are preserved for reference and learning
* Develop branch always contains the latest integrated version

---

## Conclusion

This project is designed to simulate real-world development practices while learning React. By combining structured UC-based implementation with Git Flow, it ensures both conceptual clarity and professional development workflow experience.
