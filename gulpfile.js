'use strict';

var del = require('del');
var exec = require('child_process').exec;
var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', (done) => {
  runSequence(
    'build.client',
    'build.server',
    'build.package',
    done
  );
});

gulp.task('build.client', (done) => {
  execute('cd client && npm run build.prod', done);
});

gulp.task('build.server', (done) => {
  execute('cd server && npm run build.prod', done);
});

gulp.task('build.package', (done) => {
  console.log("Package build products");
  runSequence(
    'clean',
    'build.package.server',
    'build.package.client',
    done
  )
});

gulp.task('clean', (done) =>{
  return del('dist');
})

gulp.task('build.package.server', (done) => {
  return gulp.src('server/dist/prod/**/*.*').pipe(gulp.dest('dist'));;
});

gulp.task('build.package.client', (done) => {
  return gulp.src('client/dist/prod/**/*.*').pipe(gulp.dest('dist/public'));
});

function execute(command, done) {
  var execObj = exec(command);
  execObj.stdout.pipe(process.stdout);
  execObj.stderr.pipe(process.stderr);
  execObj.on('close', () => done());
}
