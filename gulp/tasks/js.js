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

gulp.task('scripts', function() {

   return gulp.src(config.scripts, {base: 'assets/'})
    .pipe(sourcemaps.init())
    .pipe(concat('scripts/main.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.appFolder))
    .pipe(browserSync.reload({stream:true}));
  //
});

gulp.task('scripts-production', function() {

   return gulp.src(config.scripts, {base: 'assets/'})
    .pipe(uglify({preserveComments: 'license'}))
    .pipe(concat('scripts/main.min.js'))
    .pipe(gulp.dest(config.appFolder))
    .pipe(browserSync.reload({stream:true}));
  //
});
