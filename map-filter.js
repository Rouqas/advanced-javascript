const input = [3, 4, 5, 7, 9];
// const output = [];
// for(let i=0; i<input.length; i++){
//     const element = input[i];
//     const result = element * element;
//     output.push(result);
// }

// function square(element){
//     return element * element;
// }
// const result = input.map(square());

// const result = input.map(function(element){
//     return element*element;
// })

// const square = element => element*element;
// const square = x => x*x;

const result = input.map(x => x * x);
console.log(result)

const bigger = input.filter(x => x>5);
console.log(bigger)