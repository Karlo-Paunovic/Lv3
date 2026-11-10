const unos = document.querySelector("#unos");
const gumbDodaj = document.querySelector("#dodaj");
const lista = document.querySelector("#lista");

gumbDodaj.addEventListener("click", function () {
  const tekst = unos.value.trim();
  console.log("Unos:", tekst);

  // Prazan unos ne dodaje stavku
  if (tekst === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = tekst;

  // Klik na zadatak: obavljeno / nije obavljeno
  li.addEventListener("click", function () {
    li.classList.toggle("gotovo");
  });

  // Gumb X: briše zadatak, ali ga ne označava obavljenim
  const gumbX = document.createElement("button");
  gumbX.textContent = "X";
  gumbX.addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
  });
  li.appendChild(gumbX);

  lista.appendChild(li);
  unos.value = "";
  unos.focus();
});
