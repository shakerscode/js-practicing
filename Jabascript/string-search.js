const products = [
    'hp laptop phone glas box mobile',
    'dwl laptop iphone glas box mobile',
    'DEL Laptop phone glas box mobile',
    'hg laptop phone glas box Mobile',
    'hp laptop phone glas box mobile',
    'hp laptop phone glas box Mobile'  
];

const searching = 'laptop';

const output = [];
for (const product of products){
    if (product.indexOf(searching) != -1){
        output.push(product);
    }
}
console.log(output);