// Affichage
let affichage = document.getElementById("chrono");
// Demande du temps à décompter
let temps = parseInt(prompt("Votre compte à rebour en secondes"));
// Convertisseur
let convertisseur = temps * 1000;
// Variable temporaire de calcul
let tmp = temps + 1;

setInterval(() => {
  if (tmp === 0) {
    clearInterval;
    affichage.innerHTML = "Minuteur fini";
  } else {
    tmp--;
    affichage.innerHTML = `${tmp}`;
  }
}, 1000);
