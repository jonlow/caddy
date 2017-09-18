var gulp   = require('gulp'),
    config = require('../config'),
    htmlInjector = require("bs-html-injector");


var assetFolder = 'assets/';

gulp.task('watch', function() {
    gulp.watch(assetFolder + 'styles/**/*.{scss,sass}', ['sass']);
    gulp.watch(assetFolder + 'scripts/**/*', ['scripts']);
    gulp.watch(assetFolder + 'images/**/*', ['images']);
    gulp.watch(assetFolder + 'fonts/**/*', ['fonts']);
    gulp.watch(config.srcFolder + '**/*.html', ['htmlBuild']);
    gulp.watch(config.appFolder + '**/*.html', htmlInjector);
});
