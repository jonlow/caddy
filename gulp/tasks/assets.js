var gulp         = require('gulp'),
    plumber      = require('gulp-plumber'),
    handleErrors = require('../util/handleErrors'),
    config       = require('../config'),
    changed      = require('gulp-changed'),
    browserSync  = require('browser-sync');

// Move static assets to app folder
gulp.task('moveAssets', function(){

    return gulp.src(config.staticAssets , { base: './src' })
    .pipe(plumber({
        errorHandler: handleErrors
    }))
    .pipe(changed(config.appFolder + 'assets'))
    .pipe(gulp.dest(config.appFolder + 'assets'));
});
