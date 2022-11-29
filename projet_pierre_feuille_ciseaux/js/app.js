//  Jeux du robot
let jeux = ["Pierre", "Feuille", "Ciseaux"];
let random = Math.floor(Math.random() * 3);
let robot = jeux[random];

// Jeux de la personne
let jouer = document.querySelectorAll("button");
let player;
for (let i = 0; i < jouer.length; i++) {
  const element = jouer[i];
  element.addEventListener("click", () => {
    player = element.innerHTML;
    if (player === robot) {
      alert("égalité");
    } else if (
      (robot === "Pierre" && player === "Feuille") ||
      (robot === "Feuille" && player === "Ciseaux") ||
      (robot === "Ciseaux" && player === "Pierre")
    ) {
      alert("Gagné");
    } else if (
      (player === "Pierre" && robot === "Feuille") ||
      (player === "Feuille" && robot === "Ciseaux") ||
      (player === "Ciseaux" && robot === "Pierre")
    ) {
      alert("Perdu");
    }
  });
}
