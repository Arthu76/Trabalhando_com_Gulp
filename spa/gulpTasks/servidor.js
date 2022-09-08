const gulp = require('gulp')
const webserver = require('gulp-webserver')
const { watch } = require('gulp')

function servidor(cb) {
  return gulp.src('build')
    .pipe(webserver({
      port: 8080,
      open: true,// abrir o browser
      livereload: true,
    }))
}

// para que salve automaticamente quando mudar algo no código
function monitorarArquivos(cb) {
  watch('src/**/*.html', gulp.series('appHTML'))
  watch('src/**/*.scss', gulp.series('appCSS'))
  watch('src/**/*.js', gulp.series('appJS'))
  watch('src/assets/imgs/**/*.img', gulp.series('appIMG'))


  return cb()
}

module.exports = {
  monitorarArquivos,
  servidor
}