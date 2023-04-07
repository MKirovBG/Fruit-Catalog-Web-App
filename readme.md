# Fruit Catalogue Web App

![GitHub last commit](https://img.shields.io/github/last-commit/MKirovBG/fruit-catalogue-web-app?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/MKirovBG/fruit-catalogue-web-app?style=flat-square)
![GitHub license](https://img.shields.io/github/license/MKirovBG/fruit-catalogue-web-app?style=flat-square)

Welcome to the Fruit Catalogue Web App! This is a front-end web application for creating and managing fruit records. The application allows visitors to browse through the fruit catalogue. Users may register with an email and a password which allows them to create their own fruit records info. Fruit authors can also edit or delete their own publications at any time.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Contributing](#contributing)

## Installation

To run the Fruit catalogue Web App on your local machine, you'll need to have Node.js and npm installed. Once you have those, follow these steps:

1. Clone this repository to your local machine
2. In the project directory, run `npm install` to install the required dependencies
3. Start the data server by `cd server` folder, `npm server`
4. Start the development server with `npm start`
5. Open [http://localhost:3000] in your browser to view the app
6. Run tests `npm run test`

## Usage

The Fruit catalogue Web App allows visitors to browse through a catalogue of fruits. Users can register with an email and password to create their own fruit records, which they can then edit or delete. Logged-in users can also add new fruit records.

The app features a responsive Navbar which changes based on whether the user is logged in or not. Guests (un-authenticated visitors) can see the links to the Login and Register and Search pages. The logged-in user navbar should contain the links to the Add Fruit, Search pages and a link for the Logout action.

## Features

- Browse through a catalogue of fruits
- Register with an email and password to create, edit, or delete fruit records
- Add new fruit records if logged in
- Responsive Navbar which changes based on user authentication status

## Technologies

This project was built using the following technologies:

- JavaScript
- Lit-html
- Page - for routing purposes
- Http - to run server
- Playright-chromium, Mocha & Chai - for testing

## Contributing

Contributions are always welcome! If you'd like to contribute to this project, please fork the repository and create a new branch with your changes. Once you've made your changes, submit a pull request and we'll review your changes.


