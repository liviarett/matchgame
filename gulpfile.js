/**
 * Gulp File
 *
 * run `gulp build-less && gulp watch` on the command line
 */

// Include Gulp plugins
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    path = require('path');

var browserSync = require('browser-sync').create();


gulp.task('watch', function() {
  gulp.watch('resources/*/*', ['serve'])
});

gulp.task('serve', function() {

  browserSync.init({
    server: {
        baseDir: "./"
    }
  });

  gulp.watch(['resources/*/*']);
});
