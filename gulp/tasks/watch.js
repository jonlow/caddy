var gulp   = require('gulp'),
    config = require('../config');

var manifest = require('asset-builder')('./assets/manifest.json');
var path = manifest.paths;

gulp.task('watch', function() {
    gulp.watch(path.source + 'styles/**/*.{scss,sass}', ['sass']);
    //gulp.watch(config.srcFolder + 'assets/js/**/*.js', ['js']);
    gulp.watch([path.source + 'scripts/**/*'], ['jshint', 'scripts']);
      gulp.watch([path.source + 'images/**/*'], ['images']);

    gulp.watch(config.staticAssets, ['moveAssets','browser-sync-reload']);
    gulp.watch([config.srcFolder + '**/*.html', 'config.js'], ['browser-sync-reload']);
});
