// //A short brif:
// //const is a non changable variable. 
// const name = 'Shaker Ahamed';

// //let is a changable variable. 
// let nameChanged = 'Shaker Ahamed Tasfi';

// //applyng conditions
// //>=   -greater than or equal 
// // <=   -less than or equal
// // >   -greater than
// // <   -less than
// // ==  -equals
// // ===   -strictly equals
// // !=   -not equals
// // !==   -stricly not equals
// const n = [2, 34, 45, 5, 6, 6, 77, 2, 6];
// const names = {
//     name: 'Shaker Ahamed', 
//     nickName: 'tasfi', 
//     ImaginationLove: 'Mihin',
//     job : {
//         office : 'usa',
//         mainjob: 'softwereDev',
//         workHoure : 7
//     }
// };
// // console.log(n[3]);
// // console.log(Object.keys(names));
// //condition one is ===
// //A short brif: What is === in JavaScript? === (Triple equals) is a strict equality comparison operator in JavaScript, which returns false for the values which are not of a similar type. This operator performs type casting for equality. If we compare 2 with “2” using ===, then it will return a false value.
// if(n[0] === n[7]){
//     console.log('=== is a equal condition that make conditions between to things and check wether the conditions is equal or not.')
// }
// else{
//     console.log('not worked')
// }
// //!== operator : !==) is the logical opposite of the strict equality operator. It means “Strictly Not Equal” and returns true where strict equality would return false and vice versa. Strict inequality will not convert data types. For example 1 !==
// if(n[2] !== n[5]){
//     console.log(`${name}`,'not match')
// }
// else{

// }
// //check if it is big or not. if not than it will log else.
// if(n[3] > n[5]){
//  console.log('it is greaterthan sign.')
// }
// else{
//     console.log('did not match')
// }

// //The greater than or equal operator ( >= ) returns true if the left operand is greater than or equal to the right operand, and false otherwise
// if(n[2] >= n[5]){
//  console.log('it is greaterthan or equal sign.')
// }
// else{
//     console.log('did not match');
// }
// //check if it is big or not. if not than it will log else. it is less then sign.

// if(n[3] < n[6]){
//  console.log('it is less than sign.')
// }
// else{
//     console.log('did not match');
// };

// // The less than or equal operator ( <= ) returns true if the left operand is less than or equal to the right operand, and false otherwise.

// if(n[4] <= n[5]){
//     console.log('it is less than or equal sign.')
//    }
//    else{
//        console.log('did not match');
//    }

// var a = 2;
// var b = '2';
// if (a == b){
//     console.log('matched')
// }else{
//     console.log('dont match')
// }

//How to declare an array? 
//array
const arr  = [12, 122, 33, 43, 32, 23];
const arrTwo = ['shaker', 'tasfi', 'ahamed', 'mihin'];
// console.log(arr.length);
// console.log(arrTwo.length);

//array.indexof[]
// console.log(arr.indexOf(32))

//array.push()
const rep = arr.push(44);
// console.log(rep, arr);
//array.pop()
const remv = arr.pop(12);
// console.log(remv, arr);
//array shift()
const remv1 = arr.shift();
// console.log(remv1, arr);
//array unshift()
const add = arr.unshift(12);
// console.log(add, arr);
//how  to add  elements in an array? by using index[];
arr[6]= 3333;
// console.log(arr)
//how to creat a new array from an older array?
const arr3 = [33, 43, 5, 555, 67, 78]
const newArr = [23, 32, ...arr, 455, 45, ...arr3]
// console.log(newArr);
//array methods 

//map
const persons = [
    {firstname : "Malcom", lastname: "Reynolds", price: 3900},
    {firstname : "Kaylee", lastname: "Frye", price: 4900},
    {firstname : "Jayne", lastname: "Cobb", price: 3000}
  ];
  // console.log(persons.firstname)
  
const arr4 =  persons.map((person) => person.lastname) 
// console.log(arr4);

//forEach
const decArr  = [21, 21, 34, 42, 55, 16, 17, 18, 9, 10, 144];
// decArr.forEach ( darr => console.log(darr));
// persons.forEach(p => console.log(p.price))

//filter
const resOne = persons.filter(p => p.price > 3000);

// console.log(resOne);

const res2 = decArr.filter(n => n >  55)

// console.log(res2);
//find
const resTwo = persons.find(p => p.price === 3000);
// console.log(resTwo);

//array destructuring
const anArray = [
  {name: 'taggggsfi',
        op:{
            h: 'tt',
            iid: 34,
            gh: "dfhrtj"
          },
  vil: 'gggdt', 
  id: 1033300
}
  // {name: 'tasgggfi', vil: 'dccct', id: 1004430},
  // {name: 'tatttttsfi', vil: 'vvvdt', id: 104400},
  // {name: 'taeeeesfi', vil: 'dccct', id: 10400}
]

// const [name, vil, id] = anArray;
// console.log(name)

const [names, vl, ids, pa] = [ 'tasfi', 100000, 010, 'dsfjf']
// console.log(names, vl)

//array.includes

//optional chaining
const varr = [
 { 
   nameee: 'tasfi',
   id: 234,
   job: 'developer',
   workplace:{
     addr:'dhk',
     offid: 34
   },
   vill: 'dltpr'
}
]

console.log(varr[0].workplace?.addr)// we can use the same way into the object method.