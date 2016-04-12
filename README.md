# ExpressJS Blog


The ExpressJS Blog demo for Node.js testing with Jasmine and Karma


## Getting Started


Make sure you have [Node.js](https://nodejs.org/en/) installed first.

Next cd into the project directory and install the dependencies:

```language-bash
$ npm install
```

Run the server:

```language-bash
$ node app.js
#=> Serving at http://localhost:3000
```


Run all tests:

```language-bash
$ npm test
```


Run back-end tests only:

```language-bash
$ jasmine-node --verbose spec/backend
```

Run front-end tests only:

```language-bash
$ karma start
```

Run seeds to regenerate data:

```language-bash
$ node seeds.js
```







