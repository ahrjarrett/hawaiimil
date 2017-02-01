const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const del = require('del')
const livereload = require('gulp-livereload')
const nodemon = require('gulp-nodemon')
const sass = require('gulp-ruby-sass')

const config = {
  css: './public/css/',
  sass: './public/css/**/*.scss'
}

gulp.task('default', [
  'styles',
  'develop',
  'watch'
])

gulp.task('clean-styles', () => {
  const files = config.css + '*.css'
  del(files)
})

gulp.task('develop', () => {
  livereload.listen()

  nodemon({
    script: 'bin/www',
    ext: 'js jade',
    stdout: false
  }).on('readable', function() {
    this.stdout.on('data', function(chunk) {
      if(/^Express server listening on port/.test(chunk)) {
        livereload.changed(__dirname)
      }
    })
    this.stdout.pipe(process.stdout)
    this.stderr.pipe(process.stderr)
  })
})

gulp.task('styles', ['clean-styles'], () => {
  console.log('compiling sass -> css')

  return sass(config.sass)
    .pipe(autoprefixer({ browsers: ['last 2 version', '> 5%'] }))
    .pipe(gulp.dest(config.css))
})

gulp.task('watch', () => {
  gulp.watch(config.sass, ['styles'])
  //gulp.watch(config.js, ['scripts'])
})





