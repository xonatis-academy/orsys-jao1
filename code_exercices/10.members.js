function voiture() {
    this.marque = 'Ford';
    this.modele = 'Focus';
    this.rouler = function() {
        console.log('Vroom vroom');
    }
}

let ford = new voiture();
console.log(ford);