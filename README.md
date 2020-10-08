# Smarthome

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [React](https://reactjs.org)
  - `yarn install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `yarn install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `yarn install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `yarn install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `yarn install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `yarn install --save-dev @nrwl/node`

## Generate an application

Run `yarn nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `yarn nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@smarthome/mylib`.

## Development server

Run `yarn nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `yarn nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `yarn nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Start

Run `yarn start my-app` to start the app. Before start env variable `GOOGLE_CLIENT_ID` has to be set (client id of project in Google cloud which will handle authentication).

## Running unit tests

Run `yarn nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `yarn nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `yarn nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `yarn nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
