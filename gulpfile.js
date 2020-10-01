var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('assets/stylesheets/src/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/stylesheets/css'))
});

gulp.task('watch', function () {
  return gulp.watch('assets/stylesheets/**/*.scss', gulp.series(['sass']));
});