// array
// number
// var friendsAge = [34, 34, 48, 34, 43]

// // String
// var friendsName = ['Ahamed', 'Shaker', 'Tasfi', 'Baker']

// // how to know the quantitiy of element in an Array? .length
// var ageElement = friendsAge.length;
// var friendsNameElement = friendsName.length;
// console.log(ageElement);
// console.log(friendsNameElement)

// How to know the element position? indexOf
// We can check the value position by indexOf.
// var friendsName = ['Ahamed', 'Shaker', 'Tasfi', 'Baker']
// var nameIndex = friendsName.indexOf('Tasfi');
// console.log(nameIndex);

// how to check the position of an Element in an array? Mean who is in position no 3? 
// var friendsName = ['Ahamed', 'Shaker', 'Tasfi', 'Baker'];
// friendsName [3] =' Sadiq';
// var checkPosition = friendsName[3];
// console.log(checkPosition);



// var age = [38, 84, 48, 38, 84];

// age [1] = 35;

// console.log(age);

// add - Array Push
// var age = [38, 84, 48, 38, 84];
// var name = ['Ahamed', 'Shaker', 'Tasfi', 'Baker'];
// age.push(99);
// name.push('Sadiq');
// console.log(age);
// console.log(name);

// //remove - Array pop
// var age = [38, 84, 48, 38, 84];
// var name = ['Ahamed', 'Shaker', 'Tasfi', 'Baker'];
// age.pop();
// name.pop();
// console.log(age);
// console.log(name);

// shift remove from the front
// var age = [38, 84, 48, 38, 84];
// var name = ['Ahamed', 'Shaker', 'Tasfi', 'Baker'];
// // age.shift(67);
// // name.shift('Mihin');

// // unshift add element in the front
// age.unshift(67);
// name.unshift('Mihin');
// console.log(age);
// console.log(name);

// practice Code

var aliaGot = 95;
var daliaGot = 66;
var saliaGot = 80;
var maliaGot = 59;
var liliaGot = 47;
var jhaliaGot = 77;

if (aliaGot >= 90 ){
    console.log( 'Got A+' );
}
else{
    console.log('fail');
}

if (daliaGot >= 60 && daliaGot <= 69){
    console.log( 'Got C' );
}
else{
    console.log('fail');
}
if (saliaGot >= 80 ){
    console.log( 'Got A' );
}
else{
    console.log('fail');
}
if (maliaGot >= 50 ){
    console.log( 'Got D' );
}
else{
    console.log('fail');
}
if (liliaGot >= 50 ){
    console.log( 'Got D' );
}
else{
    console.log('fail');
}
if (jhaliaGot >= 70 ){
    console.log( 'Got B' );
}
else{
    console.log('fail');
}
