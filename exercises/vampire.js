class Vampire {
    constructor(name, pet, thirsty) {
      this.name = name;
      this.pet = pet;
      if ( pet === undefined) {
        this.pet = 'bat';
      } else {
        this.pet = pet;
      }
      this.thirsty = thirsty;
      if ( thirsty === undefined) {
        this.thirsty = true;
      } else {
        this.thirsty = thirsty;
      }
    }

    drink() {
        return this.thirsty = false;
    }
}

module.exports = Vampire;