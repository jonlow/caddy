var browserSync = require('browser-sync'),
    gulp        = require('gulp'),
    config      = require('../config'),
    htmlInjector = require("bs-html-injector");

// Auto inject CSS into the browser
gulp.task('browserSync', function() {

    browserSync.use(htmlInjector);
    browserSync({
        server: config.appFolder
    });
});

gulp.task('browser-sync-reload',['htmlBuild'], function() {

    browserSync.reload();
});

