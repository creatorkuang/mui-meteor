Package.describe({
  name: 'creatorkuang:mui-meteor',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "material-ui": "0.12.3",
  "externalify": "0.1.0",
  "react-tap-event-plugin": "0.1.7"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('react');
  api.use('cosmos:browserify');
  
  api.addFiles([
    "react-material-ui.browserify.options.json",
    "react-material-ui.browserify.js"
  ]);
  api.export(['mui','injectTapEventPlugin']);

});