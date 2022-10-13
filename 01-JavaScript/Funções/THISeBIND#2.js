function pessoa() {
    this.idade = 0

    setInterval(function(){ // Dispara uma nova ação, recebendo oque será definido de intervalo.
        this.idade++
        console.log(this.idade);
    }.bind(this), 1000) // Temporizado, no caso ele fica chamando a function sempre com em 1 milisegundo.
} // Com o .bind(this) -> assim ela fixar o this de tudos para começar a chamar.

new pessoa()

///////////////////////////////////////////////////////////////////////////////

function contagem() {
    this.numero = 0
    setInterval(function(){
        this.numero++
        console.log(this.numero);
    }.bind(this),1000)
}

new contagem()

////////////////////////////////////////////////////////////////////////////////

function nomeSobrenome() {
    this.nomeesobrenome = "Aniele Tavares"
    setInterval(function(){
        this.nomeesobrenome++
        console.log(this.nomeesobrenome)
    }.bind(this), 1000)
}

new nomeSobrenome()

/////////////////////////////////////////////////////////////////////////////////

function Pessoais() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoais