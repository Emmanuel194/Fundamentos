let num1 = 1
let num2 = 2

num1++ //forma pós fixada , Depois do operando.
console.log(num1)

--num1 //forma pre fixada,  antes do operando.
console.log(num1)

console.log(++num1 === num2--) // é verdadeiro pq a operação do ++num1 vem primeiro do num2
console.log(num1 == num2)