what is API?
API is some thing that gave you data from server side web sites. Application Programming Interface
1. stringify
2. parse

const shop = {
    name: 'sat shop',
    address: 'daulatpur',
    products: ['phone, laptop, tech devces']
}
const stringyfied = JSON.stringify(shop)
console.log(stringyfied);
const convert = JSON.parse(stringyfied);
console.log(convert);
const convert = JSON.parse(stringyfied.address);
console.log(convert);

