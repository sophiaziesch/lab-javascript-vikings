// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack () {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage
        if(this.health > damage) {
            return `${this.name} has received ${damage} points of damage`
        } else{
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage
        /* if(this.health <= 0) {
            return `A Saxon has died in combat`
        } else{
            return `A Saxon has received ${damage} points of damage`
        } */
        
        if (this.health>0) {
            return `A Saxon has received ${damage} points of damage`
        } else{
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    vikingArmy = []
    saxonArmy = []
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        const saxInd = Math.floor(Math.random() * this.saxonArmy.length);
        const vikInd = Math.floor(Math.random() * this.vikingArmy.length);
        
        const result = this.saxonArmy[saxInd].receiveDamage(this.vikingArmy[vikInd].strength);

        if(this.saxonArmy[saxInd].health <= 0) {
            this.saxonArmy.splice(saxInd, 1);
        }
        return result;
    }
    saxonAttack() {
        const saxInd = Math.floor(Math.random() * this.saxonArmy.length);
        const vikInd = Math.floor(Math.random() * this.vikingArmy.length);
        
        const result = this.vikingArmy[vikInd].receiveDamage(this.saxonArmy[saxInd].strength);

        if(this.vikingArmy[vikInd].health <= 0) {
            this.vikingArmy.splice(vikInd, 1);
        }
        return result;
    }
    showStatus() {
        if(this.saxonArmy == 0) {
            return "Vikings have won the war of the century!";
        } else if(this.vikingArmy == 0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
