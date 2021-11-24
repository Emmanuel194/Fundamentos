const peso1 = 1.0 // tipos de number no javascript
const peso2 = Number('2.0')

console.log(peso1, peso2) // para mostrar os valors da const
console.log(Number.isInteger(peso1)) // para mostrar o valor inteiro se (verdadeiro o falso)
const avalicao1 = 9.871
const avalicao2 = 6.871

const total = avalicao1 * peso1 + avalicao2 * peso2 // constante para multiplicar ou somar os valores citados depois
const media = total / (peso1 + peso2) // constante para tirar a media de todos valores citado posteriores.

console.log(media.toFixed(2)) // console para mostrar a média do valor total da constant citada.
console.log(media.toString) // transfomrar/converte o valor numero em String
console.log(typeof média) // para mudar ou mostrar no valor tipo NUMBER
console.log(typeof Number) // se transformar o valor em uma função