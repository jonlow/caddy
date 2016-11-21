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
