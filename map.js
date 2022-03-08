//making array value dubble by maping
const number = [2,23, 43, 4, 34, 45];
// const  output = [];
const dubbleIt = number => number * 2; 
// for (const num of number){
//     const result = dubbleIt(num);
//     output.push(result);
// };
// console.log(output);

// const output = number.map(dubbleIt);
const output = number.map( x => x*x*x);
console.log(output);


//At first we did our oldest way to dubble a number. there we need to do three things. but we can do it only in a one line that i have been shown top of this paragrap. it is kind of loop that run the function. 

//More mapping in js!

const name = ['harry hi', 'potter', 'shaker', 'tasfi' ];

const nameLength = name.map(names => names.length);
console.log(nameLength);

const products = [
    {name: 'mog', color: 'white', price: 230},
    {name: 'phone', color: 'gray', price: 12030},
    {name: 'phone2', color: 'full gray', price: 11230},
    {name: 'glass', color: 'white', price: 120}
]
const productsName = products.map(p => p.color);
console.log(productsName);


products.forEach(product => console.log(products.name));


 