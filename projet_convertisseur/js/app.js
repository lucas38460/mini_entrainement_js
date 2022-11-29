let result = document.getElementById("result");
let euros = document.getElementsByName("euro");
let francs = document.getElementsByName("franc");
let input = document.querySelectorAll("input");
let convert = 6.55957;

for (let i = 0; i < input.length; i++) {
  const element = input[i];
  element.addEventListener("input", (e) => {
    if (element.name == "euro") {
      result.innerHTML = "Converti en franc = " + element.value * convert;
    } else if (element.name == "franc") {
      result.innerHTML = "Converti en euro = " + element.value / convert;
    }
  });
}

// 6.55957
