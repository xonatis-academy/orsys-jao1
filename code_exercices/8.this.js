function affecter() {
    this.age = 45;
    this.prenom = 'Annie';
}

function afficher() {
    console.log(this);
}

affecter();
afficher(); // prints {age: 45, prenom: 'Annie'}
console.log(this); // prints {} GEC ou contexte par defaut
console.log(globalThis); // prints {age: 45, prenom: 'Annie'}
