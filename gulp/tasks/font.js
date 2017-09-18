var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    config          = require('../config'),
    flatten         = require('gulp-flatten');

gulp.task('fonts', function() {
  return gulp.src('assets/fonts/**/*')
    .pipe(flatten())
    .pipe(gulp.dest(config.appFolder + 'fonts'))
    .pipe(browserSync.stream());
});
