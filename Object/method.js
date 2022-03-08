const me = {
    id: 121,
    money: 29000,
    name: 'shaker ahamed',
    home: 'noakhali',
    subject: ['english', 'math', 'calculas'],
    bestFriend: {
        id: 123,
        name: 'tasfi',
        major: 'mathmathics'
    },
    takeExam: function(){
        console.log(this.name,'taking exam')
    },
    givingTreat: function(expense, boxix){
        this.money = this.money - expense - boxix;
        return this.money;
    }
}

me.takeExam();
const remaingBal = me.givingTreat(10999, 700);
console.log(remaingBal);