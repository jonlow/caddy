var gulp            = require('gulp'),
    argv            = require('minimist')(process.argv.slice(2));
    jshint          = require('gulp-jshint'),
    uglify          = require('gulp-uglify'),
    browserSync     = require('browser-sync'),
    config          = require('../config'),
    concat          = require('gulp-concat'),
    rename          = require('gulp-rename'),
    merge           = require('merge-stream'),
    gulpif          = require('gulp-if'),
    sourcemaps      = require('gulp-sourcemaps'),
    lazypipe        = require('lazypipe');
    rev             = require('gulp-rev');

var manifest = require('asset-builder')('./assets/manifest.json');
var path = manifest.paths;
var globs = manifest.globs;
var revManifest = path.dist + 'assets.json';
var project = manifest.getProjectGlobs();

var enabled = {
  // Enable static asset revisioning when `--production`
  rev: argv.production,
  // Disable source maps when `--production`
  maps: !argv.production,
  // Fail styles task on error when `--production`
  failStyleTask: argv.production,
  // Fail due to JSHint warnings only when `--production`
  failJSHint: argv.production,
  // Strip debug statments from javascript when `--production`
  stripJSDebug: argv.production
};


var jsTasks = function(filename) {

  console.log(filename);

  return lazypipe()
    .pipe(function() {
      return gulpif(enabled.maps, sourcemaps.init());
    })
    .pipe(concat, filename)
    .pipe(uglify, {
      compress: {
        'drop_debugger': enabled.stripJSDebug
      }
    })
    .pipe(function() {
      return gulpif(enabled.rev, rev());
    })
    .pipe(function() {
      return gulpif(enabled.maps, sourcemaps.write('.', {
        sourceRoot: 'assets/scripts/'
      }));
    })();
};

gulp.task('scripts', function() {
  var merged = merge();
  manifest.forEachDependency('js', function(dep) {
    console.log(dep);
    merged.add(
      gulp.src(dep.globs, {base: 'scripts'})
        .pipe(jsTasks(dep.name))
    );
  });


  return merged
    .pipe(writeToManifest('scripts'));
});

var writeToManifest = function(directory) {
  return lazypipe()
    .pipe(gulp.dest, path.dist + directory)
    .pipe(browserSync.stream, {match: '**/*.{js,css}'})
    .pipe(rev.manifest, revManifest, {
      base: path.dist,
      merge: true
    })
    .pipe(gulp.dest, path.dist)();
};

gulp.task('jshint', function() {
  return gulp.src([
    'gulpfile.js'
  ].concat(project.js))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulpif(enabled.failJSHint, jshint.reporter('fail')));
});
