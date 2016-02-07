var gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    config       = require('../config'),
    plumber      = require('gulp-plumber'),
    rename       = require('gulp-rename'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    handleErrors = require('../util/handleErrors'),
    browserSync  = require('browser-sync'),
    filter       = require('gulp-filter');

// SASS CSS Build
gulp.task('sass', function () {

    return gulp.src(['./assets/styles/main.scss'])
    .pipe(plumber({
        errorHandler: handleErrors
    }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    //.pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.', {sourceRoot: '../../assets/styles/'}))
    .pipe(gulp.dest(config.appFolder + 'styles'))
    .pipe(filter('**/*.css')) // Filtering stream to only css files
    .pipe(browserSync.reload({stream:true}));
});

// Desktop Only SASS CSS Build
gulp.task('sass-desktop', function () {

    return gulp.src(['src/assets/scss/desktop.scss'])
    .pipe(plumber({
        errorHandler: handleErrors
    }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '.'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(autoprefixer({browsers: ['last 1 version', 'iOS 6'], cascade: false}))
    .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '../../src/assets/scss'}))
    .pipe(gulp.dest(config.appFolder + 'assets/css'))
    .pipe(filter('**/*.css')) // Filtering stream to only css files
    .pipe(browserSync.reload({stream:true}));
});
