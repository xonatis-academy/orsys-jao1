let obj = (function() {
    var age = 13;
    var nom = 'Bastien';

    return {
        age: age,
        prenom: nom
    };
})();

console.log(obj); // prints { age: 13, prenom: 'Bastien' }
