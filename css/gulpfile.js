// O SASS é uma linguagem de extensão do CSS, com a intensão de adicionar recursos especiais 

// Gerar uma pasta com os dados finais da aplicação


const { parallel } = require('gulp')
const gulp = require('gulp')
var sass = require('gulp-sass')(require('node-sass'));

// uglify ira minificar o código, para que o deixe menor, com menos linhas possiveis
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
  return gulp.src('src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({"uglyComments": true}))
    .pipe(concat('estilo.min.css'))
    .pipe(gulp.dest('build/css'))
}

// desafio: copiar o Index.HTML para a pasta build

// minha tentativa
function copiarHTML() {
  return gulp.src('src/index.html')
    // .pipe(uglifycss({"uglyComments": true}))
    .pipe(gulp.dest('build'))
}

// resposta do professor
// function copiarHTML() {
//   return gulp.src('src/index.html')
//     .pipe(gulp.dest('build'))


exports.default = parallel(transformacaoCSS, copiarHTML)
