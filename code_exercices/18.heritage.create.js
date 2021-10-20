function Voiture(price) {
    this.price = price;
}

const v = new Voiture(57000);
const obj = Object.create(v); // obj.__proto__ = v;
console.log(obj.price); // prints 57000

const obj2 = {
    age: 20
};
console.log(obj2.__proto__); // prints [Object: null prototype] {}
