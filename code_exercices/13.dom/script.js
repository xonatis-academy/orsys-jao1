// On selectionne l'element d'id "compute-btn"
const bouton = document.getElementById('compute-btn');
// On bind une fonction a l'event "click"
bouton.addEventListener('click', function() {

    // On selectionne l'element d'id "typing-input"
    const input = document.getElementById('typing-input');
    // On recupere la valeur de l'input
    const valeur = input.value;

    // On selectionne l'element d'id "result-div"
    const div = document.getElementById('result-div');

    // On remplace le contenu de la div

    // 1. Calculer le prix reduit de 20%
    const result = valeur * 0.8;
    div.innerHTML = result;

    // 3. Associer une couleur pour savoir si le paiement
    // sans contact est possible :
    //    - vert : possible
    //    - rouge : sinon
    if (result > 50) {
        div.style.color = 'red';
    } else {
        div.style.color = 'green';
    }

    // 2. Nettoyer l'input apres le calcul
    input.value = '';    
});