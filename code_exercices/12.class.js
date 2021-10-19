/*
function Voiture(price) {
    this.price = price;
}
*/

class Voiture {
    constructor(price) {
        this.price = price;
    }

    isCher() {
        return this.price > 60000;
    }
}

console.log(typeof Voiture);

/*
Declarer une classe Person avec 
age, nom et prenom
Instancier cette classe pour en construire 
un objet
*/

class Person {
    constructor(age, nom, prenom) {
        this.age = age;
        this.nom = nom;
        this.prenom = prenom;
    } 
}

const obj = new Person(13, 'Vincent', 'Time');
console.log(obj);

