var gulp = require('gulp');
var path = require('path');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var util = require('gulp-util');

var config = require('./gulp.config')();

gulp.task('copy.dev', (done) => {
  runSequence(
    'copy.configs.dev',
    'copy.static.dev',
    done
  );
});

gulp.task('copy.prod', (done) => {
  runSequence(
    'copy.configs.prod',
    'copy.static.prod',
    'copy.package',
    done
  );
});

gulp.task('copy.configs.dev', function () {
  return copyConfigs(config.dev);
});

gulp.task('copy.configs.prod', function () {
  return copyConfigs(config.prod);
});

gulp.task('copy.static.dev', function () {
  return copyStatic(config.dev);
});

gulp.task('copy.static.prod', function () {
  return copyStatic(config.prod);
});

gulp.task('copy.package', function () {
  return gulp.src("package.json")
    .pipe(gulp.dest(config.prod.dest));
});

function copyConfigs(configMode) {
  return gulp.src(configMode.configFile)
    .pipe(rename('config.json'))
    .pipe(gulp.dest(configMode.configDest));
}

function copyStatic(configMode) {
  return gulp.src("public/**/*.*")
    .pipe(gulp.dest(path.join(configMode.dest, './public')));
}
