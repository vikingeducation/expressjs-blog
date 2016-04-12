# ExpressJS Blog


The ExpressJS Blog demo for Node.js testing with Jasmine and Karma


## Getting Started


Make sure you have [Node.js](https://nodejs.org/en/) installed first.

Next cd into the project directory and install the dependencies:

```bash
$ npm install
```

Run the server:

```bash
$ node app.js
#=> Serving at http://localhost:3000
```


Run all tests:

```bash
$ npm test
```


Run back-end tests only:

```bash
$ jasmine-node --verbose spec/backend
```

Run front-end tests only:

```bash
$ karma start
```

Run seeds to regenerate data:

```bash
$ node seeds.js
```







