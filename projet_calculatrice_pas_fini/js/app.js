// Récupération des chiffres et symboles
let buttons = document.querySelectorAll("button");
//  Récupération de l'affichage du résultat
let affichage = document.getElementById("output");
// Variable contenant le chiffre ou le symbole cliqué
let calcul;
// Compteur du limitateur de nombre
let click = 0;

// Boucle sur tout les bouttons
for (let i = 0; i < buttons.length; i++) {
  // Raccourcit
  const element = buttons[i];
  //   Récupératin du click sur le chiffre ou symbole cliqué
  element.addEventListener("click", () => {
    // Ajout de 1 sur le limitateur de clique
    click++;
    // Ajout du nouveauchiffre cliqué
    calcul += element.innerHTML;
    affichage.textContent = `${calcul}`;
  });
}
