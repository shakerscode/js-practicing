function num (a, b, c){
    if (a < b && a < c){
        return a;
    }
    else if (b < a && b < c){
        return b;
    }
    else {
        return c;
    }
}
const result = num(2, 3, 4);
console.log(result);