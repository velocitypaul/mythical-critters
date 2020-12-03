class Unicorn {
  constructor(name, color = 'white') {
    this.name = name;
    this.color = color;
  }

  isWhite() {
    if (this.color === 'white') {
      return true; 
    } else {
      return false;
    }
  } 

  says(said) {
    return `**;* ${said} *;**`;
  }
}




module.exports = Unicorn;
