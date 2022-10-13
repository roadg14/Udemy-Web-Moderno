let num1 = 1;
let num2 = 2;

num1++ // Forma fixada. essa forma ele adicionar +1.
console.log(num1);
--num1 // Forma pre-fixada. ele retira no caso -1.
console.log(num1);

num2++ 
console.log(num2);
--num2
console.log(num2);

console.log(++num1 === num2--);
console.log(++num1 == num2--);