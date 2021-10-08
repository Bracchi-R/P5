

//récupération des données du localStorage
let storedContact = JSON.parse(localStorage.getItem('contact'));
console.log(storedContact);


// création page de confirmation
const pageRec = document.getElementById('recap');

const titre = document.createElement('h2');
titre.textContent = "Nous vous remerciont de votre commande Mme, M ";

const price = document.createElement('p');
price.textContent = "Le total de votre commande est de : ";