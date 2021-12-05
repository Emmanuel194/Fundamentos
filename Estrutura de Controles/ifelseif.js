Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
  if (nota.entre(9, 10)) {
    console.log('Aprovadissimo!!')
  } else if (nota.entre(7, 8,99)){
    console.log('Parabéns, Aprovado!')
  } else if(nota.entre(4.99 ,6.99)){
    console.log('Recuperação.')
  } else if(nota.entre(1.50, 4.50)){
    console.log('Reprovado!')
  } else {
    console.log('nota Invalida')
  }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(4)
imprimirResultado(-1)
