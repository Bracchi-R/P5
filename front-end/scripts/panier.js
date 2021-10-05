//récupération des données du localStorage
let storedCams = JSON.parse(localStorage.getItem('newArticle'));
console.log(storedCams);

// création du panier
const divPanier = document.getElementById('panier');

if(storedCams == null){
    // si le panier est vide
    const panierVide = document.createElement('p');
    divPanier.appendChild(panierVide);
    panierVide.textContent = "Votre panier est vide"
    
} else {
    // si il y a des article dans le panier 
    for (storedCam of storedCams) {

        // création de la div pour une cam
        const camDiv = document.createElement('div');
        divPanier.appendChild(camDiv);

        // création du p pour le nom de la cam
        const camName = document.createElement('p');
        camDiv.appendChild(camName);
        camName.textContent = storedCam.camName;

         // création du p pour le prix de la cam
         const camPrice = document.createElement('p');
         camDiv.appendChild(camPrice);

        // // création du boutton sup de l'article
        const camSup = document.createElement('button');
         camDiv.appendChild(camSup);
         camSup.textContent = "sup";
         camSup.setAttribute("id","cam__sup");
    }

    



}























/*
// création de la div pour une cam
const camDiv = document.createElement('div');
divPanier.appendChild(camDiv);

// création du p pour le nom de la cam
const camName = document.createElement('p');
camDiv.appendChild(camName);
*/