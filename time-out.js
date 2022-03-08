function doSomeThing(){
    console.log('calling a function');
}

console.log('calling first one');
//setTimeOut used for using function leater
console.log('calling second one');
setTimeout(doSomeThing);
console.log('calling third one');