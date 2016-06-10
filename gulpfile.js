var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    combineMq = require('gulp-combine-mq'),
    nano = require('gulp-cssnano'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    watch = require('gulp-watch'),
    imageResize = require('gulp-image-resize'),
    sourcemaps = require('gulp-sourcemaps'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin');

var paths = {
  // coffee: 'js/coffee.coffee',
  rstyle: 'sass/*.scss',
  rscript: ['js/*.js']
};
function eatError (error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('rstyle', function() {
  return sass('sass/revere.scss')
    .on('error', sass.logError)
    .pipe(combineMq({ beautify: true, log:true }))
    .pipe(replace('@charset "UTF-8";', ''))
    .pipe(sourcemaps.write())
    .pipe(rename('public/css/revere.unmin.css'))
    .pipe(gulp.dest(''))
    .pipe(nano())
    .pipe(rename('public/css/revere.css'))
    .pipe(gulp.dest(''));
});
gulp.task('rscripts', function() {
  gulp.src('js/main.js')
    .pipe(concat('main.combined.js'))
    .on('error', eatError)
    .pipe(gulp.dest('public/js/'))
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js/'));
});
gulp.task('svgstore', function () {
  return gulp
    .src('icons/svg/*.svg')
    // .pipe(svgmin())
    .pipe(svgstore())
  .pipe(rename('icons.svg'))
    .pipe(gulp.dest('public/icons/'));
});
gulp.task('watch', function() {
  gulp.watch(paths.rscript, ['rscripts']);
  gulp.watch(paths.rstyle, ['rstyle']);
});
gulp.task('default', ['watch', 'rscripts', 'rstyle']);