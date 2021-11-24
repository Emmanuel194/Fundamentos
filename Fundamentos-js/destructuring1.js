// novo recurso do ES2015

const pessoa = {
    nome: 'ana' ,
    idade: 5,
    endereco: {
        logradouro: 'rua ABC',
        numero: 1000
    }
}

const {nome, idade } = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)


const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)
 

// para puxar algo dentro de um par de chaves, temq fazer o endereço do mesmo.