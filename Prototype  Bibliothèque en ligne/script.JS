
let livres = [
  { code: 1, titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", annee: 1943, disponible: true, prix: 120 },
  { code: 2, titre: "Clean Code", auteur: "Robert C. Martin", annee: 2008, disponible: true, prix: 150 },
  { code: 3, titre: "Eloquent JavaScript", auteur: "Marijn Haverbeke", annee: 2018, disponible: false, prix: 200 },
];


document.body.style.fontFamily = "Arial";
document.body.style.textAlign = "center";

let titrePage = document.createElement("h1");
titrePage.textContent =  "Bibliothèque de l'école";
document.body.appendChild(titrePage);


let btnRefresh = document.createElement("button");
btnRefresh.textContent = "🔄 Rafraîchir la liste";
btnRefresh.style.margin = "10px";
document.body.appendChild(btnRefresh);


let container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";
document.body.appendChild(container);


let stats = document.createElement("div");
stats.style.marginTop = "20px";
document.body.appendChild(stats);

function afficherLivres() {
  container.innerHTML = "";

  livres.forEach((livre) => {
    let card = document.createElement("div");
    card.style.border = "1px solid black";
    card.style.borderRadius = "10px";
    card.style.padding = "10px";
    card.style.margin = "10px";
    card.style.width = "200px";
    card.style.boxShadow = "2px 2px 5px gray";

    card.innerHTML = `
      <h3>${livre.titre}</h3>
      <p>Auteur : ${livre.auteur}</p>
      <p>Année : ${livre.annee}</p>
      <p>Prix : ${livre.prix} dh</p>
      <p>Disponible : ${livre.disponible ? "✅" : "❌"}</p>
    `;

    
    let btnSup = document.createElement("button");
    btnSup.textContent = "🗑️ Supprimer";
    btnSup.onclick = () => {
      livres = livres.filter(l => l.code !== livre.code);
      afficherLivres();
      afficherStats();
    };

    card.appendChild(btnSup);
    container.appendChild(card);
  });
}

function afficherStats() {
  let total = livres.length;
  let dispo = livres.filter(l => l.disponible).length;
  let somme = livres.reduce((s, l) => s + l.prix, 0);
  let moyenne = (somme / total).toFixed(2);
  let maxPrix = Math.max(...livres.map(l => l.prix));

  }
btnRefresh.onclick = () => afficherLivres();
afficherLivres();
afficherStats();
