let count = 360; //30 529

let rock;
let paper;
let scissor;

let rocks = [];
let papers = [];
let scissors = [];

let numRocks = count;
let numPapers = count;
let numScissors = count;
let numOverall = count * 3;

let picks = ["Rock", "Paper", "Scissor"];

function preload() {
  rock = loadImage("Draws/Rock.png");
  paper = loadImage("Draws/Paper.png");
  scissor = loadImage("Draws/Scissor.png");
}

function setup() {
  createCanvas(1700, 2960); //24, 45

  let node = new Node("Scissor");

  for (let x = 130; x < 1570; x += 60) {
    //670
    for (let y = 130; y < 2700; y += 60) {
      let done = false;

      while (done == false) {
        let pick = random(picks);

        if (pick == "Rock") {
          if (numRocks >= 1) {
            done = true;
            numRocks--;
            append(rocks, new Node(rock, x, y));
          }
        }

        if (pick == "Paper") {
          if (numPapers >= 1) {
            done = true;
            numPapers--;
            append(papers, new Node(paper, x, y));
          }
        }

        if (pick == "Scissor") {
          if (numScissors >= 1) {
            done = true;
            numScissors--;
            append(scissors, new Node(scissor, x, y));
          }
        }
      }
    }
  }
}

function draw() {
  background(220);

  for (let i = 0; i < rocks.length; i++) {
    rocks[i].Update();
  }

  for (let i = 0; i < papers.length; i++) {
    papers[i].Update();
  }

  for (let i = 0; i < scissors.length; i++) {
    scissors[i].Update();
  }
}

function Distance(x1, x2, y1, y2) {
  return sqrt(sq(x1 - x2) + sq(y1 - y2));
}

class Node {
  constructor(pick, x, y) {
    this.pick = pick;
    this.x = x;
    this.y = y;
  }

  Update() {
    image(this.pick, this.x, this.y);
    this.Move();
  }

  ChangePick(pick) {
    this.pick = pick;
  }

  Move() {
    if (this.pick == rock) {
      if (scissors.length > 0) {
        let closest = scissors[0];
        let closestVal = 0;
        let distance = Distance(this.x, scissors[0].x, this.y, scissors[0].y);

        for (let i = 0; i < scissors.length - 1; i++) {
          let newDist = Distance(this.x, scissors[i].x, this.y, scissors[i].y);

          if (newDist < distance) {
            closest = scissors[i];
            distance = newDist;
            closestVal = i;
          }
        }

        let maybe = round(random(0, 1000000));

        if (maybe != 0) {
          let randomDirectionX = random(-1, 1);
          let randomDirectionY = random(-1, 1);
          let length = sqrt(
            randomDirectionX * randomDirectionX +
              randomDirectionY * randomDirectionY
          );
          randomDirectionX /= length;
          randomDirectionY /= length;
          let movementSpeed = 1;
          this.x += randomDirectionX * movementSpeed;
          this.y += randomDirectionY * movementSpeed;
        }

        this.x += (closest.x - this.x) / distance / 2;
        this.y += (closest.y - this.y) / distance / 2;

        if (distance < 25) {
          scissors.splice(closestVal, 1);
          append(rocks, closest);
          closest.ChangePick(this.pick);
        }
      } else {
        let randomDirectionX = random(-1, 1);
        let randomDirectionY = random(-1, 1);
        let length = sqrt(
          randomDirectionX * randomDirectionX +
            randomDirectionY * randomDirectionY
        );
        randomDirectionX /= length;
        randomDirectionY /= length;
        let movementSpeed = 1;
        this.x += randomDirectionX * movementSpeed;
        this.y += randomDirectionY * movementSpeed;
      }
    }

    if (this.pick == paper) {
      if (rocks.length > 0) {
        let closest = rocks[0];
        let closestVal = 0;
        let distance = Distance(this.x, rocks[0].x, this.y, rocks[0].y);

        for (let i = 0; i < rocks.length - 1; i++) {
          let newDist = Distance(this.x, rocks[i].x, this.y, rocks[i].y);

          if (newDist < distance) {
            closest = rocks[i];
            distance = newDist;
            closestVal = i;
          }
        }

        let maybe = round(random(0, 1000000));

        if (maybe != 0) {
          let randomDirectionX = random(-1, 1);
          let randomDirectionY = random(-1, 1);
          let length = sqrt(
            randomDirectionX * randomDirectionX +
              randomDirectionY * randomDirectionY
          );
          randomDirectionX /= length;
          randomDirectionY /= length;
          let movementSpeed = 1;
          this.x += randomDirectionX * movementSpeed;
          this.y += randomDirectionY * movementSpeed;
        }

        this.x += (closest.x - this.x) / distance / 2;
        this.y += (closest.y - this.y) / distance / 2;

        if (distance < 25) {
          rocks.splice(closestVal, 1);
          append(papers, closest);
          closest.pick = this.pick;
        }
      } else {
        let randomDirectionX = random(-1, 1);
        let randomDirectionY = random(-1, 1);
        let length = sqrt(
          randomDirectionX * randomDirectionX +
            randomDirectionY * randomDirectionY
        );
        randomDirectionX /= length;
        randomDirectionY /= length;
        let movementSpeed = 1;
        this.x += randomDirectionX * movementSpeed;
        this.y += randomDirectionY * movementSpeed;
      }
    }

    if (this.pick == scissor) {
      if (papers.length > 0) {
        let closest = papers[0];
        let closestVal = 0;
        let distance = Distance(this.x, papers[0].x, this.y, papers[0].y);

        for (let i = 0; i < papers.length - 1; i++) {
          let newDist = Distance(this.x, papers[i].x, this.y, papers[i].y);

          if (newDist < distance) {
            closest = papers[i];
            distance = newDist;
            closestVal = i;
          }
        }

        let maybe = round(random(0, 1000000));

        if (maybe != 0) {
          let randomDirectionX = random(-1, 1);
          let randomDirectionY = random(-1, 1);
          let length = sqrt(
            randomDirectionX * randomDirectionX +
              randomDirectionY * randomDirectionY
          );
          randomDirectionX /= length;
          randomDirectionY /= length;
          let movementSpeed = 1;
          this.x += randomDirectionX * movementSpeed;
          this.y += randomDirectionY * movementSpeed;
        }

        this.x += (closest.x - this.x) / distance / 2;
        this.y += (closest.y - this.y) / distance / 2;

        if (distance < 25) {
          papers.splice(closestVal, 1);
          append(scissors, closest);
          closest.pick = this.pick;
        }
      } else {
        let randomDirectionX = random(-1, 1);
        let randomDirectionY = random(-1, 1);
        let length = sqrt(
          randomDirectionX * randomDirectionX +
            randomDirectionY * randomDirectionY
        );
        randomDirectionX /= length;
        randomDirectionY /= length;
        let movementSpeed = 1;
        this.x += randomDirectionX * movementSpeed;
        this.y += randomDirectionY * movementSpeed;
      }
    }
  }
}
