'use strict';

var env = require('gulp-env');
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
var shell = require('gulp-shell');

requireDir('./gulp_tasks');

/**
 * Build tasks
 */
gulp.task('build.dev', (done) => {
  process.env.NODE_ENV = 'dev';
  runSequence(
    'clean.dev',
    'build.ts.dev',
    'copy.dev',
    done
  );
});

gulp.task('build.prod', (done) => {
  process.env.NODE_ENV = 'prod';
  runSequence(
    'clean.prod',
    'tslint',
    'build.ts.prod',
    'copy.prod',
    done
  );
});

gulp.task('build.test', (done) => {
  runSequence(
    'build.dev',
    'tslint.test',
    'build.ts.test',
    done
  );
});


/**
 * Serve tasks
 */
gulp.task('serve.dev', (done) => {
  process.env.NODE_ENV = 'dev';
  runSequence(
    'build.dev',
    'server.dev',
    'watch.dev',
    done
  );
});

gulp.task('serve.prod', (done) => {
  process.env.NODE_ENV = 'prod';
  runSequence(
    'build.prod',
    'server.prod',
    done
  );
});

/**
 * Run tests.
 */
gulp.task('test', (done) => {
  runSequence('build.test', (done) => {
    // TODO: do testing
    // const envs = env.set({
    //   NODE_ENV: 'test'
    // });

    // gulp.src(['build/test/**/*.js'])
    //   .pipe(envs)
    //   .pipe(mocha())
    //   .once('error', (error) => {
    //     console.log(error);
    //     process.exit(1);
    //   })
    //   .once('end', () => {
    //     process.exit();
    //   });
  });
});

gulp.task('default', ['serve.dev']);
