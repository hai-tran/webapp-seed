var exec = require('child_process').exec;
var gulp = require('gulp');
var path = require('path');
var runSequence = require('run-sequence');
var util = require('gulp-util');

var config = require('./gulp.config')();

var serverExec = null;

gulp.task('server.dev', (done) => {
  startServer(config.dev, done);
  done();
});

gulp.task('server.prod', (done) => {
  startServer(config.prod, done);
});

function startServer(configMode) {
  console.log('Serving files from: ', util.colors.magenta(configMode.srcDest));
  indexPath = path.join(configMode.srcDest, './index.js');

  if (serverExec) {
    serverExec.kill();
  }

  serverExec = exec('node ' + indexPath);
  serverExec.stdout.pipe(process.stdout);
  serverExec.stderr.pipe(process.stderr);
}
