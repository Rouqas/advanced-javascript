function add(num1, num2){
    console.log([...arguments])
    return num1 + num2 + arguments[2];
}
const result = add(88, 12, 30, 55);
console.log(result)