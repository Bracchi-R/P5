//récupération des données du localStorage
let storedContact = JSON.parse(localStorage.getItem('contact'));
console.log(storedContact);

let price = JSON.parse(localStorage.getItem('totalPrice'));
console.log(price);

// création page de confirmation
const pageRec = document.getElementById('recap');

const titre = document.createElement('h2');
pageRec.appendChild(titre);
titre.textContent = "Nous vous remerciont de votre commande Mme, M ";

const prix = document.createElement('p');
pageRec.appendChild(prix);
prix.textContent = "Le total de votre commande est de : " + price + " €." ;