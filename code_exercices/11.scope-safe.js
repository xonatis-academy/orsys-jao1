function Voiture(price) {
    if (!(this instanceof Voiture)) {
        return new Voiture(price);
    }
    this.price = price;
}

const obj = new Voiture(57000);
console.log(obj);