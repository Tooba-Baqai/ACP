let objArr=[
    {
        name:'tooba',
        age: 21
    },
    {
        name: 'fareeha',
        age: 20
    }
];
function print(data){
    console.log(data);
}
let new_arr = objArr.map(print);
console.log(new_arr);