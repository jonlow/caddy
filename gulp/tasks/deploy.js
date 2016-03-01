var gulp = require('gulp'),
    sftp = require('gulp-sftp');

/******** Server Configuration ******/

var serverAddress = '123.456.789.123',
    userName = 'root',
    rootPath = '/var/www/caddy';

//**********************************//


gulp.task('deploy', function () {
  return gulp.src('dist/**')
    .pipe(sftp({
      host: serverAddress,
      user: userName,
      remotePath: rootPath
    }));
});


gulp.task('deploy-html', function () {
  return gulp.src('dist/*')
    .pipe(sftp({
      host: serverAddress,
      user: 'root',
      remotePath: rootPath
    }));
});

gulp.task('deploy-css', function () {
  return gulp.src('dist/styles/**')
    .pipe(sftp({
      host: serverAddress,
      user: 'root',
      remotePath: rootPath + '/styles'
    }));
});

gulp.task('deploy-js', function () {
  return gulp.src('dist/js/**')
    .pipe(sftp({
      host: serverAddress,
      user: 'root',
      remotePath: rootPath + 'scripts'
    }));
});
