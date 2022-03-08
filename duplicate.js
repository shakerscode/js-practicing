// // How to remove the duplicate number from an array?

// // function removeDuplElement(names){
// //     const uniqueBox =[];
// //     for (const element of names){
// //          if (uniqueBox.indexOf(element) == -1){ // keno element ta ei box e bosheche?
// //              uniqueBox.push(element)
// //          }
// //     }
// //     return uniqueBox;
// // }
// // let names = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'ccc', 'ggg', 'eee'];
// // const result = removeDuplElement(names);
// // console.log(result);


// function duplicateNumber(number){
//     const uniqueBox = [];
//     for (const element of number){
//         if (uniqueBox.indexOf(element) == -1){
//             uniqueBox.push(element);
//         }

//     }
//     return uniqueBox;
// }

// const numbers = [11, 34, 34, 24, 45, 23, 46, 67, 76, 78, 54, 76, 34, 24,46];
// const result = duplicateNumber(numbers);
// console.log(result);

//Checking a year if it is a leap year? --------------------------------------------------------------------------------

function year (myYear){
    if (myYear % 4 == 0 && myYear % 100 == 0 && myYear % 400 == 0){
        return true;
    }
    return false;
}









