const imprimirResultado = function(nota) {
  if(nota > 7) {
    console.log('Aprovado!')
  } else {
    console.log('Reprovado!')
  }
}

imprimirResultado(10)
imprimirResultado(5)

// if = quando quer fazer algo de resultado que mostre verdadeiro, e nao mostrar nada quando for falso

// if com else= quando quiser mostrar a espressão tanto de verdadeiro quanto de falso, tipo uma aprovação de um aluno