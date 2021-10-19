// object
let message = {
    age: 13,
    prenom: 'Sophie'
};

// undefined
function faireSomme(a, b, c) {
    return a + b + c;
}

console.log(faireSomme(5, 4));

// casting implicit
let estMajeur = '0';
let credit = 0;

if (estMajeur == credit) {
    console.log('Bon code');
}

// boucle
let somme = 0;
let tab = [2, 3, 5, 6];
for (const element of tab) {
    somme += element;
}
console.log(somme);

// constant
const age = 31;
age = 12;