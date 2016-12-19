var gulp = require('gulp');
var path = require('path');
var preprocess = require('gulp-preprocess');
var sourcemaps = require('gulp-sourcemaps');
var util = require('gulp-util');
var ts = require('gulp-typescript');

var config = require('./gulp.config')();

gulp.task('build.ts.dev', function () {
  return compileTs(config.dev, true);
});

gulp.task('build.ts.prod', function () {
  return compileTs(config.prod, false);
});

gulp.task('build.ts.test', function () {
  return compileTs(config.test, true);
});

function compileTs(modeConfig, genMapFile) {
  var tsFiles = [].concat(modeConfig.tsFiles);
  tsFiles = tsFiles.concat(modeConfig.additionalTsFiles);

  var tsProject = ts.createProject(modeConfig.tsConfigFile);

  var res = gulp.src(tsFiles)
    .pipe(preprocess())
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .on('error', function (e) {
      util.log('Error: ', util.colors.red(e));
    });

  if (genMapFile) {
    res = res.js
      .pipe(sourcemaps.write('.', {
        includeContent: false,
        sourceRoot: function (file) {
          var sourceFile = path.join(file.cwd, file.sourceMap.file);
          return path.relative(path.dirname(sourceFile), file.cwd);
        }
      }));
  }

  return res.pipe(gulp.dest(path.join(modeConfig.srcDest)));
}
