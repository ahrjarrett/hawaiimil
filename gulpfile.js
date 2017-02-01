const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const del = require('del')
const sass = require('gulp-ruby-sass')

const config = {
  css: './public/css/',
  sass: './public/css/**/*.scss'
}

gulp.task('clean-styles', () => {
  const files = config.css + '*.css'
  del(files)
})

gulp.task('styles', ['clean-styles'], () => {
  console.log('compiling sass -> css')

  return sass(config.sass)
    .pipe(autoprefixer({ browsers: ['last 2 version', '> 5%'] }))
    .pipe(gulp.dest(config.css))
})





