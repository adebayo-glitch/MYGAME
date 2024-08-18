class AlienShip {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    alien_attack() {
       alert("The alien has attack")
    }
}

class Captain {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    captain_attack() {
        alert("The captain has attack")
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

    start_attack() {
        alert("The attack has started")
    }

    play_around() {
        alert("Play game around")
    }
}

const game = new Game("Captain A");
game.start_attack()
game.play_around()

document.getElementById("attack").addEventListener("click", () => {});

document.getElementById("retreat").addEventListener("click", () => {});

