var gulp   = require('gulp'),
    config = require('../config');

gulp.task('watch', function() {
    gulp.watch(config.srcFolder + 'scss/**/*.{scss,sass}', ['sass']);
    gulp.watch(config.srcFolder + 'js/**/*.js', ['js']);
    gulp.watch(config.staticAssets, ['moveAssets','browser-sync-reload']);
    gulp.watch([config.srcFolder + '**/*.html', 'config.js'], ['browser-sync-reload']);
});
