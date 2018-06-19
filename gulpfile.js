'use strict';

const gulp = require('gulp'),
  sass = require('gulp-sass'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename');

gulp.task('sass', function () {
  gulp.src('src/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cleanCSS({ format: 'beautify' }))
    .pipe(rename('ethereal.css'))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('docs/assets'));
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('minify-css', () => {
  return gulp.src('src/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename('ethereal.min.css'))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('docs/assets'));
});

gulp.task('default', ['sass', 'watch']);
gulp.task('build', ['sass', 'minify-css']);
gulp.task('postinstall', ['sass', 'minify-css']);
