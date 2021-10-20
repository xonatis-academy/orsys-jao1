const Singleton = (function() {
    // instance et le constructeur : 
    // inaccessible de l'extérieur (privé)
    let instance = null;
    function constructor() {
    
    }

    return {
        // getInstance : accessible de l'exterieur
        // (public)
        getInstance: function() {
            console.log(instance);
            if(!instance) {
                instance = new constructor();
            } 
            return instance;
        }
    }
})();

const obj = Singleton.getInstance();
const obj2 = Singleton.getInstance();