//home work 
// 1
let fname = 'shaker';
let lname = 'ahamed'
nameIs = 'tasfi';
console.log(nameIs);

//2 

const fullName = `${fname} ${lname}`
console.log(fullName);

//3

const diveded = number => number / 5;
const result = diveded(10000);
console.log(result);

//4
const bigMath = (num1, num2) =>  (num1 + 2) * (num2 + 2);
const result1 = bigMath(100, 200);
console.log(result1);

//5 
const multification = (x, y, z) => x*y*z;
console.log(multification(22,22,22));

//6
const bigMathArry = (num1, num2) =>  {
    const xx = num1 + 2;
    const yy =  num2 + 2;
    const total = xx * yy;
    return total;
}
const result2 = bigMathArry(100, 200);
console.log(result2);

//7
const numbers = [12, 23, 32, 21, 34];
const outoput = numbers.map(number => number * 5);
console.log(outoput);

//8

const number1  = [12, 232, 22, 11, 21, 33, 23, 22];
const resul4 = number1.filter(n => n % 2 == 1);
console.log(resul4);

//9

const arr = [
    {name: 'Mphone', price:'120000', color: 'balck'},
    {name: 'iphone', price:'5000', color: 'bule'},
    {name: 'Zphone', price:'13000', color: 'gray'},
    {name: 'Sphone', price:'12000', color: 'greenish'}
];

const res = arr.find(n => n.price == 12000);
console.log(res);

//10
const elements = 
    {name: 'Mphone', price:'120000', color: 'balck'};

const {name, price, color} = elements;
console.log (price);