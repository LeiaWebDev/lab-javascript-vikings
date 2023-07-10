// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    attack(){
        //this.strength = 0
        return this.strength
    }
    receiveDamage(hasDamage){
        //this.hasDamage = hasDamage
        this.health = this.health - hasDamage
        //this.health -= hasDamage
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super(health, strength)
        this.name = name 
    }

    // attack(){
    //     this.strength = 0
    //     console.log(`my strength is ${this.strength}`)
    // }
    
    receiveDamage(hasDamage){
        //this.hasDamage = hasDamage
        this.health = this.health - hasDamage
        //this.health -= hasDamage
        //console.log(`my new strength is ${this.strength}`)
        if(this.health > 0 ){
            return `${this.name} has received ${hasDamage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }

    }

    battleCry() {
        return `Odin Owns You All!`
    }

}

    

// Saxon
class Saxon extends Soldier {
 unnamed (){
    this.name = !this.name
 }

 receiveDamage(hasDamage){
    // this.hasDamage = hasDamage
    this.health = this.health - hasDamage
    //this.health -= hasDamage
    if(this.health > 0 ){
        return `A Saxon has received ${hasDamage} points of damage`
    } else {
        return `A Saxon has died in combat`
    }
 }

}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    
    addViking(oneViking){
        this.vikingArmy.push(oneViking)
    }
    addSaxon(oneSaxon){
        this.saxonArmy.push(oneSaxon)
    }

    // for a saxon
    vikingAttack(){
        this.saxonArmy.forEach((oneSaxon) => {
        this.saxonArmy.receiveDamage(hasDamage)
        })  
        hasDamage = Viking.strength
             Saxon.health -= hasDamage
             if(Saxon.health < 0 ){
             this.saxonArmy.pop(oneSaxon)
            return `A Saxon has died in combat`
        }
        }     
    //     

    // for a viking
    saxonAttack(){
        this.vikingArmy.forEach((oneViking) => {
        this.vikingArmy.receiveDamage(hasDamage)
        })
         hasDamage = Saxon.strength
        Viking.health -= hasDamage
        if(Viking.health < 0 ){
        this.vikingArmy.pop(oneSaxon)
        return `A Viking has died in combat`
    }
    }
    
    // receiveDamage(hasDamage){
    //     hasDamage = Viking.strength
    //     Saxon.health -= hasDamage
    //     if(Saxon.health < 0 ){
    //     this.saxonArmy.pop(oneSaxon)
    //     return `A Saxon has died in combat`
    //                             } 
    //                         }
    // }
    
    
    // showStatus()
    
    
}
