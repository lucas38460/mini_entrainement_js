let action = document.querySelector("#validation");
let Vrai_identifiant = "test";
let Vrai_mdp = "test";

action.addEventListener("click", () => {
  let identifiant = document.querySelector("#identifiant").value;
  let mdp = document.querySelector("#mdp").value;
  if (identifiant == Vrai_identifiant) {
    console.log(identifiant, mdp);
    alert("Bon Identifiant et bon Mot de passe");
  } else {
    console.log(identifiant, mdp);
    alert("Mauvais Identifiant ou Mot de passe");
  }
});
