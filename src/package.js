Package.describe({
  name: 'c0r3y8:octopus-logger',
  version: '0.2.1',
  // Brief, one-line summary of the package.
  summary: 'Logger based on winston for Octopus',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/C0r3y8/octopus-logger.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  warning: '3.0.0',
  winston: '2.3.1'
});

const testPackages = [
  'practicalmeteor:mocha',
  'practicalmeteor:mocha-console-runner',
  'practicalmeteor:chai'
];

/* eslint-disable func-names, prefer-arrow-callback */
Package.onUse(function (api) {
  api.versionsFrom('1.4.2.3');

  api.use('ecmascript');

  api.use('tmeasday:check-npm-versions@0.3.1');

  api.mainModule('server/index.js', 'server');
});
/* eslint-enable */

/* eslint-disable func-names, prefer-arrow-callback */
Package.onTest(function (api) {
  api.use('ecmascript');

  api.use(testPackages);

  api.use('c0r3y8:octopus-logger');
});
/* eslint-enable */
