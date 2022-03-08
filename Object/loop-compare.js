const bottle = {
    color: 'yellow',   
    hold: 'water',   
    price: 222,  
    isCleand: true   
};

//how manye type loop we learned?
// 1. for(let i =0, i<0, i++){}
//2. for(const num of numbers){} == array
//3. for(cosnt prop in student){} == objct

for(const prop in bottle){
    console.log(prop,':', bottle[prop])
}

// using for in loop in keys

const keys = Object.keys(bottle);
console.log(keys);
for(const prop of keys){
    console.log(prop, bottle[prop]);
}

//advanced way
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}