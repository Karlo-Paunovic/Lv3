const poljeA = document.querySelector("#a");
const poljeB = document.querySelector("#b");
const rezultat = document.querySelector("#rezultat");

function prikaziGresku(poruka) {
  rezultat.classList.add("greska");
  rezultat.textContent = poruka;
}

function izracunaj(operacija) {
  rezultat.classList.remove("greska");

  // Number("") daje 0, zato prazno polje provjeravamo prije pretvorbe
  if (poljeA.value === "" || poljeB.value === "") {
    prikaziGresku("Unesite oba broja.");
    return;
  }

  const a = Number(poljeA.value);
  const b = Number(poljeB.value);
  console.log("a =", a, "b =", b);

  if (isNaN(a) || isNaN(b)) {
    prikaziGresku("Unos nije ispravan broj.");
    return;
  }

  let r;
  if (operacija === "+") {
    r = a + b;
  } else if (operacija === "-") {
    r = a - b;
  } else if (operacija === "*") {
    r = a * b;
  } else if (operacija === "/") {
    if (b === 0) {
      prikaziGresku("Dijeljenje s nulom nije dozvoljeno.");
      return;
    }
    r = a / b;
  }

  rezultat.textContent = "Rezultat: " + r;
}

document.querySelector("#zbroji").addEventListener("click", () => izracunaj("+"));
document.querySelector("#oduzmi").addEventListener("click", () => izracunaj("-"));
document.querySelector("#pomnozi").addEventListener("click", () => izracunaj("*"));
document.querySelector("#podijeli").addEventListener("click", () => izracunaj("/"));
