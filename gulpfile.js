const clean = require('gulp-clean');
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const ts = require('gulp-typescript');
const tslint = require("gulp-tslint");

const tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', () => {
  gulp.src('dist/**/*', {read: false})
    .pipe(clean());
});

gulp.task('tslint', () => {
  gulp.src('src/**/*.ts')
    .pipe(tslint({
      fix: true,
      formatter: 'stylish'
    }))
    .pipe(tslint.report());
});

gulp.task('typescript', ['tslint'], () => {
  const tsResult = gulp.src('src/**/*.ts').pipe(ts());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('mocha', ['typescript'], () => {
  gulp.src('dist/**/*.test.js', {read: false})
    .pipe(mocha());
});

gulp.task('build', ['typescript']);
gulp.task('test', ['mocha']);

gulp.task('default', ['build']);
