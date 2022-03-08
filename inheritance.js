 class Support extends StudentCare{
        grouphSupportTime;
        constructor(name, address, time){
            super()
            this.grouphSupportTime = time;
        }
 }




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

class StudentCare {
    name;
    role = 'student care web dev';
    address = 'bd';
    constructor(name){
        this.name = name;
}
work(){
    console.log(this.name, 'start a new hwlth care');
}
}

const amir = new Support('Amir');
const amir = new StudentCare('Amir');
amir.work();
console.log(amir);