//what does filter do?
//simple just like condition that give a the spacific things that you want. its almosdt like map system. deffernt is it need a conditipon. it will give you an arry
const numbers = [12, 12, 3, 32, 33, 23, 45];

const bigNumber = numbers.filter(num => num  > 20);
const minNumber = numbers.filter(num => num  < 20);
console.log(minNumber);

//find  in js
// find is also like filter or map. it just take the condition and find the first element from the array. if the condition as been fulfiled than it won't go next step to compltet the condition. the loop will stope if the condition get fulfiled at first. it will give an element from an array. won't give you an array or empty arry.