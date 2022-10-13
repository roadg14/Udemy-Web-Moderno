const gulp = require('gulp') // Importa
const { series, parallel } = require('gulp')
//const series = gulp.series
//const { series } = require('gulp')
// Series -> tasks em série | const series = gulp.series
// Parallel -> tasks em paralelo | const parallel = gulp.parallel

const tentativa1 = cb => { // cb = callback
    console.log('Tarefa de tentativa1!')
    return cb() // return define que task foi concluída
}

const tentativa2 = cb => {
    console.log('Tarefa de tentativa2!')
    return cb()
}

function copiar(cb) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) // gulp.src -> seleciona quais arquivos serão utilizados como entrada
    gulp.src(['pastaA/**/*']) // Seleciona qualquer arquivo dentro da pastaA com extensão .txt
    // gulp.dest -> define pasta destino para arquivos de entrada  
        .pipe(gulp.dest('pastaB')) // pipe -> aplica alterações nos arquivos de entrada
    return cb()
}


const fim = cb => {
    console.log('Tarefa Fim!')
    return cb()
}

// Arquivo gulp precisa ser exportado
// default -> porta de entrada para que gulp execute as tarefas
module.exports.default = series( // Exporta
    parallel(tentativa1,tentativa2), // Após executar antes1 e antes2 em parelelo, segue na série.
    copiar,
    fim
    )