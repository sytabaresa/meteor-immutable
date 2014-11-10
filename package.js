Package.describe({
  name: 'sytabaresa:immutable',
  summary: 'immutable collections like Map, List, Set for javascript',
  version: '3.0.3',
  git: 'https://github.com/sytabaresa/meteor-immutable.git'
});

Package.onUse(function(api) {
  api.export("Immutable");
  api.versionsFrom('1.0');
  api.addFiles('immutable/immutable.min.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sytabaresa:immutable.js');
  api.addFiles('sytabaresa:immutable.js-tests.js');
});
