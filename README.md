# A starter project for angular and typescript
This starter project enables you to compile your Angular 1 app with webpack.
It is possible to write code in ES5, ES6 and Typescript. Examples for supported code styles are available in **src/app**.

## Prerequisite
You need Node.js in version 6+ with npm 3+ or [yarn](https://yarnpkg.com/) (recommended). The recommended way to install Node.js is to use [nvm](https://github.com/creationix/nvm)

## Development
Install all necessary dependencies
```
npm install
# or
yarn
```

Start the development server
```
npm start
# or
yarn start
```
The development server will lint your code on every change and trigger a reload.

You can create a bundle with all necessary assets with the following command
```
npm run build:dev
# or
yarn run build:dev
```

## Testing
All files with the **.spec.ts** or **.spec.js** extension will be executed with karma
```
npm test             # single run
npm run test:watch   # run tests in watch mode
# or
yarn test
yarn run test:watch
```

All files with the **.e2e.ts** are executed with protractor. You need to start the development server to run e2e tests.
```
npm run pree2e   # needs to be executed only once after the installation of the dependencies
npm run e2e 
# or
yarn run pree2e
yarn run e2e
```

To run e2e tests (**.e2e.ts** extension)
## Additional commands

```
npm run lint    # lints all js and ts files in src and config
# or 
yarn run lint
```

## Production
To bundle your application for production use the following command
```
npm run build:dist
# or
yarn run build:dist
```
