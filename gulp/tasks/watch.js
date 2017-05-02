var gulp   = require('gulp'),
    config = require('../config'),
    htmlInjector = require("bs-html-injector");


var manifest = require('asset-builder')('./assets/manifest.json');
var path = manifest.paths;


gulp.task('watch', function() {
    gulp.watch(path.source + 'styles/**/*.{scss,sass}', ['sass']);
    gulp.watch([path.source + 'scripts/**/*'], ['scripts']);
    gulp.watch([path.source + 'images/**/*'], ['images']);
    gulp.watch([path.source + 'fonts/**/*'], ['fonts']);
    gulp.watch(config.srcFolder + '**/*.html', ['htmlBuild']);
    gulp.watch(config.appFolder + '**/*.html', htmlInjector);
});
