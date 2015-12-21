var gulp        = require('gulp'),
    jshint      = require('gulp-jshint'),
    uglify      = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    config      = require('../config'),
    rename      = require('gulp-rename');

gulp.task('js',function(){
  gulp.src('src/js/scripts.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest(config.appFolder + 'assets/js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.appFolder + 'assets/js'))
    .pipe(browserSync.reload({stream:true, once: true}));
});
