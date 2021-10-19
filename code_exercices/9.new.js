function affecter() {
    this.age = 45;
    this.prenom = 'Annie';
}

let person = new affecter();
console.log(person);

/**
 * Creer une fonction voiture 
 * qui renseignera la marque et le modele
 * Utilisez ensuite l'operateur new
 * pour creer un nouveau contexte
 */

 // constructeur : le nom commun
 function voiture() {
     this.marque = 'Ford';
     this.modele = 'Focus';
 }

 let ford = new voiture();
 console.log(ford);