var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var concat = require('gulp-concat');

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('scripts', function() {
  return gulp.src('js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('bower_components/foundation-sites/dist/js'));
});





// gulp.task('default', ['scripts'], ['sass'], function() {
//   gulp.watch(['scss/**/*.scss'], ['sass']);
// });
gulp.task('default',  function() {
  // Log file changes to console

  // Sass Watch
   gulp.watch(['scss/**/*.scss'], ['sass']);

  // JS Watch
  gulp.watch(['js/**/*.js'], ['scripts']);
});