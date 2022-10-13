// Configuração do servidor
const gulp = require('gulp')
const webserver = require('gulp-webserver') // UM REQUERIMENTO PARA O SERVIDOR.
const watch = require('gulp-watch') // Vai atualização rapidamente nas paginas online. (Qualquer mudança)

function servidor(cb) {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080, // A porta que ele vai usar
            open: true, // Se vai abrir em browser = Pai dos burros.
            livereload: true // Deixa ele sempre atualizando.
        }))
}

function monitorarArquivos(cb) {
    watch('src/**/*.html', () => gulp.series('appHTML')()) // Sempre que altera o html ele vai chamar a função appHTML.
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/img/**/*.*', () => gulp.series('appIMG')())
    
    return cb() 
}


module.exports = {
    monitorarArquivos,
    servidor
}