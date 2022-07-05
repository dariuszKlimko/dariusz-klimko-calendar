# calendar todo app

## Table of contents
* [General info](#general-info)
* [Technologiess](#technologies)
* [Setup](#setup)

## General info
This project is only frontend app.

Here is deployed version: https://dariusz-klimko-calendartodo.firebaseapp.com/

Here is link to desktop version compiled with [ELECTRON](https://www.electronjs.org/): https://drive.google.com/file/d/11Q4byeZnBM2O84dq93HfaO2-y5dh6X5-/view?usp=sharing

## Technologies
* [Node.js](https://nodejs.org/en/)
* [React.js](https://create-react-app.dev/)

## Setup
Create folder "Calendar" and inside create react app.
Open "Calendar" in e.g. vscode editor and run:

```
npx create-react-app frontend
```
```
cd frontend
```

Open "src" folder and delete all files inside.
Download code from repository and paste into "src".
```
src/
  components/
  Calendar.css
  Calendar.js
  Calendar.test.js
  index.css
  index.js
  logo.svg
  reportWebVitals.js
  setupTests.js
  README.md
```

Go to "frontend" folder and install packages.
```
npm install react-auto-scale react-transition-group
```

Run application.
```
npm start
```
