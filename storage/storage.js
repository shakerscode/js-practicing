
const getItems = () =>{
    // const itemOne = JSON.parse(productName);
     
    const prices = localStorage.getItem('Product');
    
    console.log(prices);
    let itemObject;
    if(prices){
        itemObject = JSON.parse(prices);
    }
    else{
        itemObject = {};
    }
    return itemObject;
}

clickBtn = () =>{
    const vOne = document.getElementById('v-one');
    const productName = vOne.value;
    const vTow = document.getElementById('v-two');
    const productPrice = vTow.value;
    // const res = {productName, productPrice};
    vOne.value = '';
    vTow.value = '';
   
    if(!productName && !productPrice){
        alert('Give the input value please!')
        return;
    }
    const cart = getItems();
    if(cart[productName]){
        cart[productName] = parseFloat(cart[productName]) + parseFloat(productPrice);
    }
    else{
        cart[productName] = productPrice;
    }
    displayInUI(productName, productPrice);
    localStorage.setItem('Product', JSON.stringify(cart));
//    
    
}




const displayInUI = (productName, productPrice) =>{
    const item = document.getElementById('listing');
    const li = document.createElement('li');
    li.innerText = `${productName} ${productPrice}`;
    item.appendChild(li);
}

// const getItems = () =>{
//     const items = localStorage.getItem('Product');
     
// }
// // getItems();