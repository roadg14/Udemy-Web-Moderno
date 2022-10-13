// Um modo de monitorar os arquivos em servidor. Base de comandos para monitorar paralelamente tambem.
// Gerenciamento do Build.
const { series, parallel } = require('gulp')
const gulp = require('gulp')

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app') // Essa é a estruturas em Tasks separadas em outroas arquivos e chamando elas desse modo
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = ('./gulpTasks/servidor.js')

module.exports.default = series( // Uma das formas de wordflow.
    parallel( // Usando essas funções entra SERIES E PARALLEL.
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)