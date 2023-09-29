// Tipos em JavaScript: Number

const peso1 = 1.0
const peso2 = Number('2.0') // O valor é o mesmo.
const peso3 = Number('3.5')

console.log(peso1, peso2, peso3)

// Para saber se o valor da const peso1 é inteiro. True ou False.
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso3))


// Fazendo uma avaliação de notas.
const avaliacao1 = 9.871
const avaliacao2 = 5.823

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // .toFixed ele faz com que o numero do final não seja tão longo.
console.log(media.toString()) // Volta o valor. // Em Binario
console.log(typeof media)
console.log(typeof Number)