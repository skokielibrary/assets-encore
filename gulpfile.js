var gulp = require('gulp'),
  sass = require('gulp-sass'),
  minifycss = require('gulp-minify-css')

var config = {
  sass_path: 'src/scss',
  css_path: 'dist/css'
}

gulp.task('sass', function(){
  gulp.src(config.sass_path + '/*.scss')
  .pipe(sass())
  .pipe(minifycss())
  .pipe(gulp.dest(config.css_path))
});

gulp.task('watch', function(){
  gulp.watch(config.sass_path + '/*.scss', ['sass'])
});

gulp.task('default', ['sass', 'watch']);
