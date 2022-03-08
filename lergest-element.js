//Get the largest element number from an array!

function largeNum(numbers){
    let largestNumBox = [0];
    for (const number of numbers){
        if (number > largestNumBox){
            largestNumBox = number;
        }
    }
    return largestNumBox;
}
const theNumberIs = largeNum([12, 23, 34, 56, 75, 34, 53, 54, 32]);
// console.log(theNumberIs);

//Largest element of an array string.--------------

function text(sentence){
    let largestBox = sentence[0];
    for(const lnth of sentence){
         if (lnth.length  > largestBox.length ){
             largestBox = lnth;
         }
    }
    return largestBox;
    
}
const theSentence = text(['Hi', 'aaaaaaaaaaaaaa', 'tasfi', 'nil', 'akash', 'valobashi', 'oninput', 'dekha', 'tal', 'gach']);
console.log(theSentence);






// lowest element--------------------

function n(num){
    let nB = num[0];
    for (const n of num){
        if (n < nB){
            nB = n;
        }
    }
    return nB;
}
// console.log(n([10, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


