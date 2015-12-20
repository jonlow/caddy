var gulp   = require('gulp'),
    config = require('../config'),
    del    = require('del');

gulp.task('clean-html', function (cb) {
  return del([
    config.appFolder + '**/*.html'
  ], cb);
});

gulp.task('clean-images', function (cb) {
  return del(config.appFolder + '**/*.{png,jpg,gif}', cb);
});

gulp.task('clean-all', function (cb) {
  return del([
    config.appFolder + '**/*.*',
    '!' + config.appFolder + 'assets/components/**/*.*'
  ], cb);
});
