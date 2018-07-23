var gulp         = require('gulp'),
    config = require('../config'),
    browserSync  = require('browser-sync');

gulp.task('images', function() {
  return gulp.src('assets/images/**/*')
    .pipe(gulp.dest(config.appFolder + 'images'))
    .pipe(browserSync.stream());
});
