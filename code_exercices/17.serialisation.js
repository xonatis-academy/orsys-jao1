const obj = {
    age: 12,
    prenom: 'Sophie'
};

const texte = JSON.stringify(obj);
console.log(typeof texte);
console.log(texte);

const objOriginal = JSON.parse(texte);
console.log(typeof objOriginal);
console.log(objOriginal);