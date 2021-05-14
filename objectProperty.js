const students = [
    {id: 21, name: 'Manik'},
    {id: 26, name: 'disha potani'},
];

const name = students.map(s => s.name);
const ids = students.map(s => s.id);
const filter = students.filter(s => s.id>22);
const find = students.find(s =>s.id>20);
console.log(find);
console.log(filter);
console.log(ids);
console.log(name);