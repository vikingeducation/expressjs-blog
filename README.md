# ExpressJS Blog


The ExpressJS Blog demo for Node.js testing with Jasmine and Karma


## Getting Started


Make sure you have [Node.js](https://nodejs.org/en/) installed first.

Next cd into the project directory and install the dependencies:

```shell
$ npm install
```

Run the server:

```shell
$ node app.js
#=> Serving at http://localhost:3000
```


Run all tests:

```shell
$ npm test
```


Run back-end tests only:

```shell
$ jasmine-node --verbose spec/backend
```

Run front-end tests only:

```shell
$ karma start
```

Run seeds to regenerate data:

```shell
$ node seeds.js
```







