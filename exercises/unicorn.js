class Unicorn {
  constructor(name, color, said) {
    this.name = name;
    if ( color === undefined) {
      this.color = 'white';
    } else {
      this.color = color;
    }
  }

  isWhite() {
    //not sure I need this here.
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
