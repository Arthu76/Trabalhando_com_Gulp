// concatenando os arquivos em um arquivo só

const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')//O Babel é um transpilador que te permite escrever javascript de uma maneira mais moderna

function transformacaoJS(cb) {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      comments: false,// ignora os comentarios
      presets: ["env"]// pega a versão mais nova do javascript
    }))
    .pipe(uglify())// vai pegar todo o código e vai converte-lo para ser minificado
    .on('error', err => console.log(err))
    .pipe(concat('codigo.min.js'/* nome do arquivo */))
    .pipe(gulp.dest('build'))// o destino
}

exports.default = series(transformacaoJS)

//para executar usar gulp no terminal
