# component-template [![Build Status](https://travis-ci.org/reactstrap/component-template.svg?branch=master)](https://travis-ci.org/reactstrap/component-template)

Build, Document, Release & Publish React Components for [reactstrap](https://github.com/reactstrap/reactstrap) with this [Component Template](https://github.com/reactstrap/component-template).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## [Documentation](https://reactstrap.github.io/component-template/)

To start using the example npm module `component-template`, check out the [documentation](https://reactstrap.github.io/component-template/).

## Developing with Component Template

Looking to build your own components? Fork this repo and proceed with the following documentation.

### Getting started

To begin, install dependencies with

```
npm install
```

To run a local server with `create-react-app`, run:

```
npm start
```

A new browser window should open up with the following url: [http://localhost:3000](http://localhost:3000)

### Testing components

Testing is provided via [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components) which includes the [jest](https://facebook.github.io/jest/) test runner. [Enzyme](http://airbnb.io/enzyme/) is also added to enable better integration testing of components via [mount](http://airbnb.io/enzyme/docs/api/mount.html).

Execute the following command to run tests. Read more about that [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#command-line-interface).

```sh
npm run test
```

To also see test coverage when running tests, execute the following command:

```sh
npm test -- --coverage
```

### Adding your own components

Currently the example component shipped in this project is `HelloWorld`. To add your own components, replace HelloWorld with your own named component and tests.

#### Notes

- Component source code should live in `/src/components`
- Be sure to export your components here `/src/components/index.js`
- When published to npm, the `main` script in package.json will be available at `lib/index.js` thanks to the `prebuild` task
- Changelogs are important for communicating to users what features, fixes and breaking changes have been shipped. This project uses the [angular commit convention](https://github.com/angular/angular.js/blob/cf241c425b20569e4c7909bfbd379f5c07694288/CONTRIBUTING.md#-git-commit-guidelines) as standard for creating readable and machine parseable commit messages.

### Release Flow

Included in this project are a few scripts to help document, release and publish a react component. Before proceeding, make sure the `name`, `version`, `description`, and `repository` in `package.json` are updated to properly define your own component.

Once your components are added and tested, use the following steps to release to npm.

#### Create Release branch

First, run the `create-release-branch` script locally, which takes 1 argument, the release version. The release version can be a specific semantic version or it accepts `patch`, `minor`, `major` to automatically increment the current release version and update the changelog. After the script is run, a branch will be pushed to the repo.

```sh
# RELEASE_VERSION: "1.0.0", patch, minor, major
RELEASE_VERSION=0.2.0
npm run create-release-branch -- $RELEASE_VERSION
```

With the branch pushed to github, you can now manually create the pr.

#### Publish Docs

First, update the npm task `gh-pages`, to set the proper `REACT_APP_GH_PAGES_PATH` for your project. Ex: `https://reactstrap.github.io/component-template` project would be `component-template`. No need for the trailing or leading slash.

Follow the next sections to publish locally or via Travis CI.

##### Without CI

With the `REACT_APP_GH_PAGES_PATH` path updated, run the `deploy-docs` script to compile the production version of your docs and push those changes to the `gh-pages` branch of your repo.

```sh
npm run deploy-docs
```

##### via Travis CI

Coming soon

#### Publish Release

First, be sure to [signup for npm](https://docs.npmjs.com/getting-started/publishing-npm-packages#creating-a-user) if you haven't or run `npm login` with your existing credentials.

Next, run the `publish-release` task which will pull the latest changes, compile the components, tag the current commit as the `version` in `packge.json`. push the tags to github and finally will run `npm publish`. Check the [publish-release](/scripts/publish-release) script for more info.

```sh
npm run publish-release
```

## Missing Something

Feel free to create an [issue](https://github.com/reactstrap/component-template/issues/new) or PR.
