let argent_depart = parseFloat(prompt("Votre argent total"));
let affichage = document.getElementById("compte");
affichage.innerHTML = `${argent_depart}`;
let buttons = document.querySelectorAll("button");
let comptenu = () => {
  return (affichage.innerHTML = `${argent_depart}`);
};
let malus = 0;

for (let i = 0; i < buttons.length; i++) {
  const element = buttons[i];
  element.addEventListener("click", () => {
    if (element.innerHTML === "+10") {
      argent_depart += 10;
      comptenu();
    } else if (element.innerHTML === "+20") {
      argent_depart += 20;
      comptenu();
    } else if (element.innerHTML === "+100") {
      argent_depart += 100;
      comptenu();
    } else if (element.innerHTML === "-10") {
      if (argent_depart < 0) {
        argent_depart += 10;
      }
      argent_depart -= 10;
      comptenu();
    } else if (element.innerHTML === "-20") {
      if (argent_depart < 0) {
        argent_depart += 20;
      }
      argent_depart -= 20;
      comptenu();
    } else if (element.innerHTML === "-100") {
      if (argent_depart < 0) {
        argent_depart += 100;
      }
      argent_depart -= 100;
      comptenu();
    }
    if (argent_depart <= 0) {
      malus++;
      alert(
        "Votre banque ne vous laisse que maximum 100€ de découvert maximum"
      );
      if (malus === 3) {
        alert("Vous allez être bannis pour manque de sous");
      }
    } else if (argent_depart >= 2500) {
      malus--;
      alert("Vous avez remboursé un malus. Vous avez" + malus + "Malus");
    }
  });
}
