class Ninja {
  constructor (name, health, speed, strength){
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }

  sayName() {  // #6
    console.log(this.name);
  }

  showStats() {  // #7
    console.log('Name:' + this.name, 'Strength:' + this.strength, 'Speed:' + this.speed, 'Health:' + this.health);
  }

  drinkSake() {  // #8
    this.health += 10;
  }
}


class Sensei extends Ninja {  // #1
  constructor (name){
    super(name);
    this.name = name;
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;  // #2
  }

  speakWisdon(){  // #3
    super.drinkSake();  // #4
    console.log("What one programmer can do in one month, two programmers can do in two months.");
  }
}

const supersensei1 = new Sensei ('Master Splinter');
console.log(supersensei1);
supersensei1.speakWisdon();
supersensei1.showStats();
