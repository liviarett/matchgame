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

// Compile LESS to CSS

// Watch all LESS files, then run build-less
gulp.task('watch', function() {
  gulp.watch('../style.less', ['build-less'])
})

// Default will run the 'entry' task

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
