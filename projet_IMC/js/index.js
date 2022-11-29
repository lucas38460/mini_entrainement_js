let input = document.querySelectorAll("input");
let btn = document.getElementById("submit");
let IMC = 0;

let resultat = document.getElementById("resultat");
resultat.textContent = `Rentrez votre poids et votre taille`;

btn.addEventListener("click", () => {
  IMC = input[0].value / (input[1].value * input[1].value);

  resultat.textContent = `Votre IMC arrondi à l'unité est de: ${parseInt(IMC)}`;
});
