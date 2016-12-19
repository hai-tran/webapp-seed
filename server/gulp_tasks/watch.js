var gulp = require('gulp');
var runSequence = require('run-sequence');
var util = require('gulp-util');
var watch = require('gulp-watch');

var config = require('./gulp.config')();

gulp.task('watch.dev', (done) => {
  let paths = [].concat(config.dev.tsFiles);
  watchChanges(paths, 'build.dev', 'server.dev');
});

function watchChanges(files, ...reloadSequence) {
  watch(files, (e) => {
    runSequence(...reloadSequence, () => {
      util.log('Complete Rebuild changed file: ', util.colors.cyan(e.path));
    });
  });
}
