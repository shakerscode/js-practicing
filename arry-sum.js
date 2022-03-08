// let num = [23, 24, 24, 45, 45, 57, 45];
// let sum = 0;
// for (i = 0; i < num.length; i++){
//     let element = num[i]
//     sum = sum + element;
//     console.log(sum);
// }


// let num = [23, 43, 43, 56, 66, 78, 89];
// let sum = 0;
// for (i = 0; i < num.length; i++){
//     let position = num[i];
//     sum = sum + position;
//     console.log(sum);
// }

// function arryNumberadd(numbers){
//     let sum = 0;
//     for ( let i = 0; i < numbers.length; i++){
//             let elementPosition = numbers[i];
//             sum = sum + elementPosition;    
//     }
//     return sum;
// }
// let result = arryNumberadd([34, 44, 56, 67, 78, 98, 65]);
// console.log(result);

// Average Way 1------------------------

// function arryAve (numbers){
//     let ave = 0;
//     for (let i = 0; i < numbers.length; i++ ){
//         let elementPosition = numbers[i];
//         ave = (eval(numbers.join('+'))/numbers.length);
//         result = ave / numbers;
//     }
//     return ave;
// }

// let endResult = arryAve([10, 15, 20]);
// console.log(endResult);

// Average Way 1------------------------

// function arryAve (numbers){
//     let ave = 0;
//     for (let i = 0; i < numbers.length; i++ ){
//         let elementPosition = numbers[i];
//         ave = ave + elementPosition / numbers.length;
//         // result = ave 
//     }
//     return ave;
// }

// let endResult = arryAve([10, 15, 20, 25, 30]);
// console.log(endResult);


// function square (x, y, z){
    
//     if(x+y <= z || y+z <= x || z+x <= y) {
        
//     }
     
// }

// let endResultIs = square([2, 2, 2]);
// console.log(endResultIs);

// let x = 3 ;
// let y = 4 ;
// let z = 6 ;

// if(x+y <= z || y+z <= x || z+x <= y) {
//         console.log((x * y * z);
// }
// else  {
//         console.log('dont know');
// }
 
// function num (numbers){
//         let resultBox = 0;
//         for( let i = 0; i <numbers.length; i++ ){
//                let element = numbers[i];
//                 resultBox = resultBox + element;

//         }
//         return resultBox;
// }

// const result = num([12, 23, 32, 34, 34, 56]);
// console.log(result);




function num (numbers){
        let resultBox = 0;
        let ave = 0;
        for (const element of numbers){
                resultBox = resultBox + element;
                ave = resultBox / numbers.length;
        }
        return ave;
}



const result =  num([12, 23, 45, 45, 56, 2]);
console.log(result);



