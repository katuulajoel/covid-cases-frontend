# COVID 19 PROJECT

## Requirements

For development, you will only need Node.js installed on your environement.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v17.0.1

    $ npm --version
    8.5.3

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` or `yarn` might need it.

---

## Install

    $ git clone https://github.com/katuulajoel/covid-cases-frontend.git
    $ cd covid-cases-frontend
    $ yarn install

### Configure app

Create `.env` and after Copy `example.env` content into it. then edit it with the url where you have setup:

- backend api

## Start & watch

    $ yarn dev

or

    $ npm run dev

## Simple build for production

    $ yarn build

or 

    $ npm run build

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

To run those 3 commands you can just do

    $ npm run pull

---

## Languages & tools

### HTML

- Used Html in the public file for the application

### Typescript

- [Redux toolkit](https://redux-toolkit.js.org/) is used to to manage application state.
- [Axios](https://axios-http.com/docs/intro) is used to make api calls.
- [React](http://facebook.github.io/react) is used for UI.
- [Redux saga](https://redux-saga.js.org/) is use to manage side effects in the application (asynchronous actions)
- [Material Ui](https://mui.com/) is used to provide the theme of the application
- [react-i18next](https://react.i18next.com/) is use to provide translations in the application

### CSS

- [styled components](https://mui.com/system/styled/) is use to make custom css for individual components.