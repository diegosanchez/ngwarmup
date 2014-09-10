module.exports = function(config){
  config.set({
    hostname: '127.0.0.1',

    basePath : '../',

    files : [
      'public/angular/angular.js',
      'public/angular/angular-mocks.js',
      'public/js/contacts.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks:[ 'jasmine'],

    browsers : ['Chrome_small'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    customLaunchers: {
      Chrome_small: {
        base: 'Chrome',
        flags: ['--window-size=400,400']
      }
    }

  });
};
