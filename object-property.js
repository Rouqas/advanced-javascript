const students = [
    {id: 30, name: 'Maolen'},
    {id: 36, name: 'Pauolen'},
    {id: 33, name: 'Shaolen'}
];
// const names = [];
// for(let i=0; i<students.length; i++){
//     const name = students[i].id;
//     names.push(name);
// }
const names = students.map( s => s.name);
const ids = students.map( p => p.id);
const smaller = students.filter( s => s.id<35);
const smallerOne = students.find( r => r.id<35);
console.log(smallerOne);