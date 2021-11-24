//par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
  const saudacao = 'falaaa' // contexto léxico 2
  return saudacao
}

// objetos sao grupos aninhados de pares nome/valor

const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,


}
console.log(saudacao)
console.log(exec)