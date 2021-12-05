function soBoaNoticia (nota) {
  if(nota >= 7) {
    console.log('aprovado com ' + nota)
  }
 }

 soBoaNoticia(8.1)
 soBoaNoticia(6.1)

 function seForVerdadeEufalo (valor) {
   if(valor){
     console.log('é verdade... ' + valor)
   }
 }

 seForVerdadeEufalo()
 seForVerdadeEufalo(null)
 seForVerdadeEufalo(undefined)
 seForVerdadeEufalo(NaN)
 seForVerdadeEufalo('')
 seForVerdadeEufalo(0)
 seForVerdadeEufalo(-1)
 seForVerdadeEufalo('?')
 seForVerdadeEufalo([])
 seForVerdadeEufalo([1, 2])
 seForVerdadeEufalo({})

 // bloco if, so vai passar o valor que for verdade e declarado dentro do 'IF', se caso for falso ele nao ira aparecer.