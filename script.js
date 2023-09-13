const formTask = document.getElementById("form");

formTask.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputnuovotask = document.getElementById("nuovotask");
  const inputnuovotaskvalore = inputnuovotask.value;
  const nuovotask = document.createElement("li");
  nuovotask.classList.add("li");
  nuovotask.innerHTML = `${inputnuovotaskvalore}<button>elimina</button>`;
  const listaNonOrdinata = document.querySelector("ul");
  listaNonOrdinata.appendChild(nuovotask);
  inputnuovotask.value = "";
});

const bottoni = document.querySelectorAll("li button");

console.log(bottoni);

for (let i = 0; i < bottoni.length; i++) {
  bottoni[i].addEventListener("submit", function () {
    console.log(bottoni);
  });
}
