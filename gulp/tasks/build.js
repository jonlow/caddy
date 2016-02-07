var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', ['sass',
                    'scripts',
                    'htmlBuild',
                    'moveAssets']);

gulp.task('build-dev', function(callback) {

  runSequence('clean-all', ['build', 'browserSync'], callback);

});

gulp.task('build-dist', [
  'build',
], function() {
  console.log('');
  console.log('=======================================\n');
  console.log('Instructional Message For Devs\n');
  console.log('Let\'s use something like');
  console.log('https://www.npmjs.org/package/colors');
  console.log('to pretty up this mesesage too \n');
  console.log('=======================================\n');

  // Keep command line open (for .bat files)
  console.log('Press any key to exit \n');

  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on('data', process.exit.bind(process, 0));
});

