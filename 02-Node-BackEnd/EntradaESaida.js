const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo);

if(anonimo) {
    process.stdout.write("Fala anonimo!\n")
    process.exit()
}else {
    process.stdout.write("Informe o seu nome: ") // Para o Usuario digita seu nome. // Evento On-data que é basicamente voce informando os dados.
    process.stdin.on('data', data => { // Evento On-data que é basicamente voce informando os dados.
        const nome = data.toString().replace('\n', '') // Quando o usuario da ENTER vai subistituir com um Espaço "_"
        
        process.stdout.write(`Fala ${nome}!!\n`) // Vai falar o nome que foi dito ou oque o usuario informou.
        process.exit()
    })
}