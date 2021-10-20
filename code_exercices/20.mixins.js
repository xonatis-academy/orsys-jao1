let medecin = {
    diplome: 'Medicine',
    soigner: function() {
        console.log('Je soigne');
    },
    manger: function() {
        console.log('Je mange a l hopital');
    }
};

let hommePolitique = {
    parti: 'JSP',
    causer: function() {
        console.log('Je cause');
    },
    manger: function() {
        console.log('Je mange au resto');
    }
};

function Person(name) {
    this.name = name;
}

for (const mixin of [medecin, hommePolitique]) {
    Object.assign(Person.prototype, mixin);
}

console.log(Person.prototype);

const bernard = new Person('Bernard');