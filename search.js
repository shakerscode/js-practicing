const products = [
    {name :' iPhone', price : 234400},
    {name :' iPhone watch', price : 234400},
    {name :' iPhone laptop', price : 234400},
    {name :' samesung', price : 23440},
    {name :' samesung laptop', price : 2400},
    {name :' samesung watch', price : 24400},
    {name :' lenovo laptop', price : 2304400},
];

function search (products, searchText){
    let result = [];
    for(const product of products){
        // console.log(product.name.includes);
        if (product.name.includes(searchText)){
            result.push(product);
             
        }
    }
    return result;
}
const endResult = search (products, 'laptop');
console.log(endResult);

 
const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}