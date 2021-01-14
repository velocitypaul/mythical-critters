class Dragon {
    constructor(name,rider,color, hungry = true, meals = 0) {
        this.name = name;
        this.rider = rider;
        this.color = color;
        this.hungry = hungry;
        this.meals = meals;
    }

    eat() {
        this.meals++;
        if (this.meals < 3) {
            this.hungry = true;
        } else {
            this.hungry = false;
        }
    }
}


module.exports = Dragon;