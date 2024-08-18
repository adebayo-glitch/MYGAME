class AlienShip {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

}

class Captain {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

}

class Game {
    constructor(CaptainName) {
        this.captain = new Captain(CaptainName, 100);
        this.alienShips = [
            new AlienShip("X", 20),
            new AlienShip("Z", 25),
            new AlienShip("T", 30),
            new AlienShip("X", 20),
            new AlienShip("V", 25),
            new AlienShip("K", 30),
        ];
        this.currentAlienShip = this.alienShips[0];
    }
}

