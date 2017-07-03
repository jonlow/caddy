var gulp         = require('gulp'),
    config       = require('../config'),
    fileinclude  = require('gulp-file-include')
    autoprefixer = require('gulp-autoprefixer'),
    plumber      = require('gulp-plumber'),
    rename       = require('gulp-rename'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    handleErrors = require('../util/handleErrors'),
    browserSync  = require('browser-sync'),
    filter       = require('gulp-filter'),
    jshint          = require('gulp-jshint'),
    uglify          = require('gulp-uglify'),
    concat          = require('gulp-concat');

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


// SASS CSS Build
gulp.task('sass', function () {

    return gulp.src('assets/styles/main.scss', {base: 'assets/'})
    .pipe(plumber({
        errorHandler: handleErrors
    }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.appFolder))
    .pipe(filter('**/*.css')) // Filtering stream to only css files
    .pipe(browserSync.reload({stream:true}));
});


// Scripts
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

