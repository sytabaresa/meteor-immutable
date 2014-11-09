Package.describe({
  name: 'sytabaresa:immutable',
  summary: 'inmmutable.js library for meteor',
  version: '3.0.3',
  git: 'https://github.com/facebook/immutable-js'
});

Package.onUse(function(api) {
  api.export("Immutable");
  api.versionsFrom('1.0');
  api.addFiles('sytabaresa:immutable.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sytabaresa:immutable.js');
  api.addFiles('sytabaresa:immutable.js-tests.js');
});
