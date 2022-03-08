const kibrya = {
    id: 101,
    money: 10000,
    name: 'rj tasfi',
    tratDayVai: function(expense, wbill){
        this.money = this.money - expense - wbill;
        console.log(this)
        return this.money;
    }
}

const hero = {
        id: 100,
        money: 5000,
        name:'taaaasfi '
}
const heroBig = {
        id: 100,
        money: 7000,
        name:'kokihh'
}
//call
// kibrya.tratDayVai.call(hero, 500, 100);
// kibrya.tratDayVai.call(hero, 1500, 100);
// kibrya.tratDayVai.call(heroBig, 1500, 100);
//apply
kibrya.tratDayVai.apply(hero, [500, 100]);
kibrya.tratDayVai.apply(hero, [1500, 100]);
kibrya.tratDayVai.apply(heroBig,[ 1500, 120]);

const getGirlFriend= (name = "chokina")=>"name"; 
console.log(getGirlFriend()); 
