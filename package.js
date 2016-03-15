Package.describe({
  name: 'elmarti:social-media-url-parser',
  version: '1.0.2',
  // Brief, one-line summary of the package.
  summary: 'Get your social media data in the correct format - URL, handle, ID etc',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/elmarti/social-media-url-parser',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('social-media-url-parser.js', ['client']);
  api.export('socialMediaURL', ['client']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('elmarti:social-media-url-parser');
  api.addFiles('social-media-url-parser-tests.js');
});
