var browserSync = require('browser-sync'),
    gulp        = require('gulp'),
    config      = require('../config');

// Auto inject CSS into the browser
gulp.task('browserSync',['build'], function() {

    browserSync({
        server: {
            baseDir: config.appFolder
        },
        logPrefix: 'Caddy'
    });
});

gulp.task('browser-sync-reload',['htmlBuild'], function() {

    browserSync.reload();
});

