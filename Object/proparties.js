const bottle = {
    color: 'yellow', //key: 'value' pair
    hold: 'water', //key: 'value' pair
    price: 222, //key: 'value' pair
    isCleand: true //key: 'value' pair
};

const key = Object.keys(bottle);
const value = Object.values(bottle);
const pairs = Object.entries(bottle);
console.log(key);
console.log(value);
console.log(pairs);

// How to remove an Object property?
delete bottle.isCleand;
console.log(bottle);

// How to stop deleting
Object.seal(bottle); 
//almost like seal. but can't change or add any value
Object.freeze(bottle); 