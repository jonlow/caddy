var gulp         = require('gulp'),
    imagemin     = require('gulp-imagemin'),
    browserSync  = require('browser-sync');

gulp.task('images', function() {
  return gulp.src('assets/images/**/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{removeUnknownsAndDefaults: false}, {cleanupIDs: false}]
    }))
    .pipe(gulp.dest(config.appFolder + 'images'))
    .pipe(browserSync.stream());
});
