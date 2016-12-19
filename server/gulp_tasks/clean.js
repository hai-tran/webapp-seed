var del = require('del');
var gulp = require('gulp');
var util = require('gulp-util');

var config = require('./gulp.config')();

gulp.task('clean.dev', function () {
  return clean(config.dev);
});

gulp.task('clean.prod', function () {
  return clean(config.prod);
});

gulp.task('clean.test', function () {
  return clean(config.test);
});

function clean(configMode) {
  del(configMode.dest);
}
