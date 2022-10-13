const [a] = [10];
console.log(a);

const [n1, n3, , n5, n7 = 0] = [10, 3, 6,];
console.log(n1, n3, n5, n7);

const [, [nota]] = [[1, 3, 4], [9, 2, 4]];
console.log(nota)