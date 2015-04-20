var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    header  = require('gulp-header'),
    fileinclude = require('gulp-file-include'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    beep = require('beepbeep'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    filter = require('gulp-filter'),
    package = require('./package.json');

var onError = function (err) {
    beep([0, 0]);
    gutil.log(gutil.colors.green(err));
    this.emit('end');
};

var buildFolder = './build/'


var banner = [
  '/*!\n' +
  ' * <%= package.name %>\n' +
  ' * <%= package.title %>\n' +
  ' * <%= package.url %>\n' +
  ' * @author <%= package.author %>\n' +
  ' * @version <%= package.version %>\n' +
  ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
  ' */',
  '\n'
].join('');

gulp.task('css', function () {
    return gulp.src('src/scss/style.scss')
    .pipe(plumber({
        errorHandler: onError
    }))
    .pipe(header(banner, { package : package }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '.'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(autoprefixer({browsers: ['last 1 version', 'iOS 6'], cascade: false}))
    .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '../../src/scss'}))


    //.pipe(minifyCSS()) See https://github.com/jonathanepollack/gulp-minify-css/issues/34

    .pipe(gulp.dest('build/assets/css'))
    .pipe(filter('**/*.css')) // Filtering stream to only css files
    .pipe(browserSync.reload({stream:true}));
});

// Header/Footer added to html build files
gulp.task('html', function () {

    return gulp.src(['./src/*.html'])
    .pipe(gulp.dest(buildFolder))
    .pipe(fileinclude({
      prefix: '@@',
      basepath: './src/partials/'
    }))
    .pipe(gulp.dest(buildFolder));
});


gulp.task('js',function(){
  gulp.src('src/js/scripts.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(header(banner, { package : package }))
    .pipe(gulp.dest('build/assets/js'))
    .pipe(uglify())
    .pipe(header(banner, { package : package }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/assets/js'))
    .pipe(browserSync.reload({stream:true, once: true}));
});

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "build"
        }
    });
});
gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('default', ['html','css', 'js', 'browser-sync'], function () {
    gulp.watch("src/scss/**/*.{scss,sass}", ['css']);
    gulp.watch("src/js/*.js", ['js','bs-reload']);
    gulp.watch("src/**/*.html", ['html','bs-reload']);
});