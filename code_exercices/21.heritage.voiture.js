class Voyant {
    allumer() {

    }
}

class VoyantPressionPneu extends Voyant {

}

class VoyantHuile extends Voyant {

}

class Capteur {
    voyant = null;

    mesurer() {

    }
}

class CapteurParSeuil extends Capteur {
    seuil = null;

    getMesure() {

    }

    mesurer() {
        let mesure = this.getMesure();
        if (mesure < this.seuil) {
            this.voyant.allumer();
        }
    }
}

class CapteurPressionPneu extends CapteurParSeuil {
    constructor() {
        this.voyant = new VoyantPressionPneu();
        this.seuil = 2;
    }

    // surcharge - overriding (shadowing)
    getMesure() {
        console.log('Mesure pression');
        return 0.9;
    }
}

class CapteurHuile extends CapteurParSeuil {
    constructor() {
        this.voyant = new VoyantHuile();
        this.seuil = 10;
    }

    // surcharge - overriding (shadowing)
    getMesure() {
        console.log('Mesure huile');
        return 20;
    }
}

class Veirficateur {
    capteurs = [];

    verifier() {

    }
}

