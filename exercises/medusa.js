class Medusa {
    constructor(name, statues = []) {
        this.name = name;
        this.statues = statues;
    }

    stare(person) {
        if(this.statues.length < 3){
            this.statues.push(person);
        }

    }
}



module.exports = Medusa;