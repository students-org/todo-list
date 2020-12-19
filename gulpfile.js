const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', function () {
  browserSync.init({
    server: './public',
    port: 8080
  });

  browserSync.watch('./**/*.*').on('change', browserSync.reload);
});

gulp.task('default', gulp.series(
  'serve'
));
