const kibrya = {
    id: 101,
    money: 10000,
    name: 'rj tasfi',
    tratDayVai: function(expense){
        this.money = this.money - expense;
        console.log(this)
        return this.money;
    }
}

const hero = {
        id: 100,
        money: 5000,
        name:'taaaasfi '
}
kibrya.tratDayVai (1900)
const res = kibrya.tratDayVai.bind(hero);
res(1500);