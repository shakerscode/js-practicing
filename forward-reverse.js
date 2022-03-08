
// Recurtion system

function number(i){
    if ( i > 15){
        return;
    }
    // console.log(i);
    number( i+1 );
}
number(0);
 
//Recurtion sum +

function sum(i){
    if (i == 1){
        return 1;
    }
    return i + sum(--i);
}
console.log(sum(5));


function sum(i){
    if(i==1){
        return 1;
    }
    return i + sum(--i);
}
console.log(sum(10));


//recurtion multification

function fact(n){
    if (n==1){
        return 1;
    }
    return n * fact(--n);
}
console.log(fact(10));