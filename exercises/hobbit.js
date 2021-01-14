
class Hobbit {
    constructor(
        name, 
        disposition = 'homebody', 
        age = 0, 
        adult = false, 
        isShort = true, 
        old = false, 
        hasRing = false
        ) {
      this.name = name;
      this.disposition = disposition;
      this.age = age;
      this.adult = adult;
      this.isShort = isShort;
      this.old = old;
      this.hasRing = (hasRing || name === 'Frodo');
    }

    celebrateBirthday() {
        this.age++;
        if (this.age > 32) {
            this.adult = true;
        }
        if (this.age > 100) {
            this.old = true;
        }
    }
}

module.exports = Hobbit;