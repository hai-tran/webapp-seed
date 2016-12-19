var gulp = require('gulp');
var tslint = require('gulp-tslint');

var config = require('./gulp.config')();

gulp.task('tslint', function(done) {
  return tslink(config.prod);
});

gulp.task('tslint.test', function(done) {
    return tslink(config.test);
});

function tslink(configMode) {
  return gulp.src(configMode.tsFiles)
    .pipe(tslint())
    .pipe(tslint.report());
}
