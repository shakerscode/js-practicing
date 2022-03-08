// class id kind of system will allaw you to creat comthing. will allaw you to creat same class that you created earlie.
//if you want to accsess any information from class use -  this

class Support {
        name;
        role ='support web dev';
        address = 'bd';
        constructor(name){
                this.name = name;
        }
        work(){
            console.log(this.name, 'start a support sesson');
        }
}

const amir = new Support('Amir');
amir.work();
// console.log(amir);