function Person(age, firstname, lastname) {
    this.age = age;
    this.firstname = firstname;
    this.lastname = lastname;
}
Person.prototype = {
    score: 432,
    poids: 20
}
function Voiture() { }
Voiture.prototype = {
    score: 234
}
const obj = new Person(16, 'Annie', 'Versaire');
obj.__proto__ = Voiture.prototype;
console.log(obj.poids);

