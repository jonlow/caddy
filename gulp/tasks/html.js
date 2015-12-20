var gulp         = require('gulp'),
    config       = require('../config'),
    fileinclude  = require('gulp-file-include');

// Add Partials to HTML files
gulp.task('htmlBuild', function() {

  return gulp.src([config.srcFolder + '*.html'])
    .pipe(gulp.dest(config.appFolder))
    .pipe(fileinclude({
      prefix: '@@',
      basepath: config.srcFolder + 'partials/'
    }))
    .pipe(gulp.dest(config.appFolder));
});
