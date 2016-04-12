// karma.conf.js 
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
      'public/js/*.js',
      'spec/frontend/fixtures.js',
      'spec/frontend/*_spec.js'
    ],
    exclude: [],
    reporters: ['dots', 'progress'],
    logLevel: config.LOG_ERROR,
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['Firefox'],
    singleRun: false
  });
};


