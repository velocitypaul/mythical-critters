class Pirate {
    constructor(
        name, 
        job = 'Scallywag', 
        cursed = false, 
        heinousActs = 0, 
        booty = 0) {
        this.name = name;
        this.job = job;
        this.cursed = cursed;
        this.heinousActs = heinousActs;
        this.booty = booty;
        this.robShip = function() {
            this.booty = 100;
            return 'YAARRR!';
        };
    }

    commitHeinousAct() {
        this.heinousActs++;
        if (this.heinousActs > 2) {
            this.cursed = true;
        }
    }

}


module.exports = Pirate;