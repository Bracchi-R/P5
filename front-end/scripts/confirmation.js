const resulte = window.location.search;

let param = new URLSearchParams(resulte);

let id = param.get("orderId");
let nom = param.get("nom");
console.log(resulte);
console.log(param);

// création page de confirmation
const pageRec = document.getElementById('recap');

const titre = document.createElement('h2');
pageRec.appendChild(titre);
titre.textContent = "Nous vous remerciont de votre commande Mme, M " + nom;

const commandeID = document.createElement("p");
pageRec.appendChild(commandeID);
commandeID.textContent = "Votre numéro de commande est le " + id;