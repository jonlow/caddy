var gulp         = require('gulp'),
    imagemin     = require('gulp-imagemin'),
    browserSync  = require('browser-sync');

var manifest = require('asset-builder')('./assets/manifest.json');
var path = manifest.paths;
var globs = manifest.globs;

gulp.task('images', function() {
  return gulp.src('src/' + globs.images)
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{removeUnknownsAndDefaults: false}, {cleanupIDs: false}]
    }))
    .pipe(gulp.dest(path.dist + 'images'))
    .pipe(browserSync.stream());
});
