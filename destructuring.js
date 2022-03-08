//What is destructuring? 
//simple! destructuring is a way that you can get all the elements from an object.if you want any single object elements value you can get it by the way of desatructuring.  


const fish = {name: 'hilsha', id:'23', price: '2222', phone:'0239023023', address:'cadpur'}

// const id = fish.id;
// const name = fish.name;

const {phone, name, id, address, price} = fish;
console.log(id);


const company = {
    name: 'sat company',
    companyId: 22222, 
    ceo: {
        nameOfCeo: 'shaker ahameed',
        nikname: 'tasfi',
        faveruitFood : 'kacchi', 
    },
    work:{ job: 'web development', emply: 4354, framework: 'react'}
};
const { food, nameOfCeo, faveruitFood} = company.ceo;
const {job, emply, framework} = company.work;
console.log(nameOfCeo, job, emply);

//declare a variable based on the name of an object property

 //distructuring in array

 const [p, q] = [122, 223];
 console.log(q);

//  in  case you get cannot read property error, use question mark sign at the end of varieable ?.



