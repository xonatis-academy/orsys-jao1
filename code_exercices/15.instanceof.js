function Voiture(price) {
    this.price = price;
}

Voiture.prototype.price = 12;
Voiture.prototype.marque = 'Ford';
console.log(Voiture.prototype);

function Avion() {

}
Avion.prototype.voler = function() {
    console.log('Je vole');
}

const v = new Voiture(57000);
v.__proto__ = Avion.prototype;
console.log(v instanceof Avion); // prints true
