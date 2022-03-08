//Defferent way to make object

//way one: using object literl
const student = {
    name: 'shaker',
    roll: 11
}

//way two: using constutcor new Object()
// const persone = new Object()
// console.log(persone);

//way three: using create system
// const human = Object.create()
// console.log(human);

//way four: usng class
class People {
        constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const ppl = new People('manush', 12);
console.log(ppl);

//way five: using function
function Manush(name){
    this.name = name;
}
const man = new Manush('kader')
console.log(man);
