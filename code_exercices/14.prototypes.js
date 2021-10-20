function Voiture(price) {
    this.price = price;
}

Voiture.prototype.price = 12;
Voiture.prototype.marque = 'Ford';
console.log(Voiture.prototype);

const v = new Voiture(57000);
console.log(v.__proto__ === Voiture.prototype);

Voiture.prototype.modele = 'Focus';
console.log(v.modele);