// o TypeScript é um superset que serve para potencializar a linguagem JavaScript. Com ele é possível construir projetos complexos sem nenhum empecilho. Além disso, ele oferece uma forte tipagem que permite maior desempenho e produtividade na hora de executar uma aplicação.

const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS() {
  return tsProject.src()
    .pipe(tsProject()) // responsavel pelo processo de compilação
    .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)
