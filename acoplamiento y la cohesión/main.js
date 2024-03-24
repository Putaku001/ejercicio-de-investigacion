class Pokemon {
    constructor(name, type, hp) {
        this.name = name;
        this.type = type;
        this.hp = hp;
    }
    attack(target) {
        console.log(`${ this.name } ataca a ${ target.name }`);
    }
    takeDamage(damage) {
        this.hp -= damage;
        if (this.hp <= 0) {
            console.log(`${ this.name } ha sido derrotado.`);
        }
    }
}

class Trainer {
    constructor(name) {
        this.name = name;
        this.pokemons = [];
    }
    catchPokemon(pokemon) {
        this.pokemons.push(pokemon);
        console.log(`${ this.name } ha capturado a ${ pokemon.name }`);
    }
    sendOutPokemon() {
        const randomIndex = Math.floor(Math.random() * this.pokemons.length);
        return this.pokemons[randomIndex];
    }
}

class Battle {
    constructor(trainer1, trainer2) {
        this.trainer1 = trainer1;
        this.trainer2 = trainer2;
    }
    start() {
        console.log(`¡Comienza la batalla entre ${ this.trainer1.name } y ${ this.trainer2.name }!`);
        const pokemon1 = this.trainer1.sendOutPokemon();
        const pokemon2 = this.trainer2.sendOutPokemon();
        while (pokemon1.hp > 0 && pokemon2.hp > 0) {
            pokemon1.attack(pokemon2);
            pokemon2.takeDamage(30);
            if (pokemon2.hp <= 0) {
                console.log(`${ this.trainer2.name } ha perdido.`);
                break;
            }
            pokemon2.attack(pokemon1);
            pokemon1.takeDamage(30);
            if (pokemon1.hp <= 0) {
                console.log(`${ this.trainer1.name } ha perdido.`);
                break;
            }
        }
    }
}

const pikachu = new Pokemon("Pikachu", "Eléctrico", 100);
const charmander = new Pokemon("Charmander", "Fuego", 100);
const squirtle = new Pokemon("Squirtle", "Agua", 100);

const p1 = new Trainer("Hitler");
const p2 = new Trainer("Putin");

p1.catchPokemon(pikachu);
p1.catchPokemon(charmander);
p2.catchPokemon(squirtle);

const battle = new Battle(p1, p2);
battle.start();