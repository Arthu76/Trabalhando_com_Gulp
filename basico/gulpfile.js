//O que é Gulp

// Gulp é um framework baseado em funções, que são conhecidas como tarefas, que são feitas para otimizar o arquivo, o deixando ele mais leve(minificar) e organizando-o com as condições possiveis

// Objetivo Aula 1 - copiar os dois arquivos da pasta A para uma pasta B

const gulp = require('gulp')

const { series, parallel } = require('gulp')
//fazer varias tarefas, uma depois da outra 


const antes1 = callb => {
  console.log('Tarefa Antes 1')
  return callb()
}

const antes2 = callb => {
  console.log('Tarefa Antes 2')
  return callb()
}

function copiar(callb) {
  //gulp.src seleciona quais arquivos você vai usar como entrada para o workflow
  gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
  // gulp.src('pastaA/**/*.txt')
    .pipe(gulp.dest('pastaB'))// .pipe() serve para fazer ou aplicar transformações nos arquivos definidos
  return callb()
}

const fim = callb => {
  console.log('Tarefa Fim!')
  return callb()
}

module.exports.default = series(
  parallel(antes1, antes2),
  copiar,
  fim,
)

//para executar usar gulp no terminal