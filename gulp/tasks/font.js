var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    flatten         = require('gulp-flatten');

var manifest = require('asset-builder')('./assets/manifest.json');
var path = manifest.paths;
var globs = manifest.globs;

gulp.task('fonts', function() {
  return gulp.src(globs.fonts)
    .pipe(flatten())
    .pipe(gulp.dest(path.dist + 'fonts'))
    .pipe(browserSync.stream());
});
