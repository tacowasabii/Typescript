class Player {
  #score = 0;
  #numLives = 10;
  static description = "player in our game";

  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
  }
  static randomPalyer() {
    return new Player("Andy", "Samberg");
  }
  get fullName() {
    //클래스가 갖고있는 프로퍼티처럼 만들어줌
    return `${this.first} ${this.last}`;
  }
  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }
  // #1
  getScore() {
    return this.#score;
  }
  // #2
  get score() {
    return this.#score;
  }
  // #1
  setScore(newScore) {
    this.#score = newScore;
  }
  // #2
  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be positive");
    }
    this.#score = newScore;
  }

  taunt() {
    console.log("hello");
  }
  loseLife() {
    this.numLives -= 1;
  }
  #secret() {
    console.log("secret");
  }
}

class AdminPlayer extends Player {
  constructor(first, last, power) {
    super(first.last);
    this.power = power;
  }
}

const player1 = new Player("blue", "steele");
player1.fullName = "Amy Adams";
console.log(player1.fullName);
console.log(player1.getScore());
player1.score = 4;
console.log(player1.score);
