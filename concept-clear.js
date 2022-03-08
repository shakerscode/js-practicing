// //Array concept clear!!!-----------------------

// const numbers = [23, 434, 53, 355, 35, 43, 3, 55];
// numbers.push(23);
// numbers.pop();
// numbers.shift();
// numbers.unshift(44)
// console.log(numbers);
// var box = 0;
// for (const element of numbers){
//      box = box + element;
//     //  console.log(box);
// }

// const numberIndex = numbers.length;
// const result = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7];
// // console.log(result);

// Functional Math! ----------------------------------------------

// function mathSolve(number){
//         let boxOne = 0;
//         let boxTwo = 0;
//         for ( const element of number){
//             console.log(element);

//         }
// }
// const numbers = (25, 20);
// const result = mathSolve(numbers);
// console.log(result);


// Conditions clearing

// const pen = 34;
// const book = 340;
// const beg = 1204;
// const shirt = 304;
// const pent = 314;

// if (pen < book){
//     console.log('I will buy the pen'); 
// }
// else if (book < beg){
//     console.log('i will buy the beg')
// }
// else{
//     console.log("I won't buy the pen");
// }

// const lightOne = '';
// const lightTwo = '';
// const lightThree = 'green';
 
// if ( lightOne == 'red'){
//     console.log('Please, stope your vehicle');
// }
// else if (lightTwo == 'yollow'){
//     console.log('Please move slowly');
// }
// else if (lightThree == 'green'){
//     console.log('You can go now! ');
// }

//Odd number --------------------------------------------

// function number(numbers){
//         const total = numbers % 2;
//         if (total == 0  ){
//             return true;
//         }
//          return false;
// }
// const result = number(130);
// console.log(result);



//Checking a year if it is a leap year? --------------------------------------------------------------------------------

// function year (myYear){
//     if (myYear % 4 == 0 && myYear % 100 == 0 && myYear % 400 == 0){
//         return true, 'Yah! Yah! Your year is leap year buddy. Congo!';
//     }
//     return (false, 'false! false! Your year is not a leap year buddy! Sorry!');
// }

// const getYear = year(1200);
// console.log(getYear);

// function year (myYear){
//     if (myYear % 4 == 0 && myYear % 100 == 0 && myYear % 400 == 0){
//             return true;
//     }
//     return false;
// }
// const enterYear = year(2200);
// console.log(enterYear);

// function checkLeapYear(year) {

//     const leap = new Date(year, 1, 29).getDate() === 29;
//     if (leap) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// // take input
// const year = checkLeapYear(2100);
// // console.log(year);


// Factorial---------------------------------------------

//     let fact = 1;
//     for (let i = 1; i <= 5; i++){

//         fact = fact * i;
       
//     }
// // console.log(result);
// console.log(fact);


// function fact(num){
//     let box = 1;
//     for(let i = 1; i <= 7; i++){
//         box = box * i;
//     }
//     return box;
// }
// const result = fact(7);
// console.log(result);



// function myFact (num){
//     let factorial = 1;
//      for (let i=1; i <= 6; i++){
//         factorial =factorial * i ;
//      }
//      return factorial;
// }
// console.log(myFact(7));