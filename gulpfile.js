const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sourcemaps = require("gulp-sourcemaps");
const gulpIf = require("gulp-if");
const del = require("del");

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == "development";

gulp.task("styles", function () {
  return gulp.src("src/**/*.css")
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(gulp.dest("public"));
});

gulp.task("clean", function(){
  return del("public");
});

gulp.task("scripts", function() {
  return gulp.src("src/**/*.js")
     .pipe(gulp.dest("public"));

});

gulp.task("index", function() {
  return gulp.src("src/**/*.html")
     .pipe(gulp.dest("public"));

});

gulp.task("build", gulp.series(
    "clean", 
     gulp.parallel("styles", "scripts", "index"))
);

gulp.task('serve', function () {
  browserSync.init({
    server: './public',
    port: 8080
  });

  browserSync.watch('./**/*.*').on('change', browserSync.reload);
});

gulp.task('default', gulp.series(
  "build",
  "serve"
));
