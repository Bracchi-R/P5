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
        camDiv.className = 'panier__article';

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

    // on récupére l'article associé au bouton sup
    let sup = document.getElementById('cam__sup');


}

// création du formulaire du client
const divClient = document.getElementById('client');

// intro du formulaire
const intro = document.createElement('p');
divClient.appendChild(intro);
intro.textContent = "Pour valider votre commande, merci de bien remplir ce formulaire : ";
intro.className = 'client__intro';

// création du form
const form = document.createElement('form');
divClient.appendChild(form);
form.className = 'form';

// ajout du prenom au formulaire
const divFirstName = document.createElement('div');
form.appendChild(divFirstName);
divFirstName.className = 'form__prenom';

const clientFirstName = document.createElement('label');
divFirstName.appendChild(clientFirstName);
clientFirstName.textContent = "Prenom : ";
clientFirstName.className = 'form__prenom__label';

const clientFirstNameInput = document.createElement('input');
clientFirstNameInput.setAttribute("type","texte");
divFirstName.appendChild(clientFirstNameInput);
clientFirstNameInput.className = 'form__prenom__input';

// ajout du nom au formulaire
const divLastName = document.createElement('div');
form.appendChild(divLastName);
divLastName.className = 'form__nom';

const clientLastName = document.createElement('label');
divLastName.appendChild(clientLastName);
clientLastName.textContent = "Nom : ";
clientLastName.className = 'form__nom__label';

const clientLastNameInput = document.createElement('input');
clientLastNameInput.setAttribute("type","texte");
divLastName.appendChild(clientLastNameInput);
clientLastNameInput.className = 'form__nom__input';

// ajout de email
const divEmail = document.createElement('div');
form.appendChild(divEmail);
divEmail.className = 'form__email';

const clientEmail = document.createElement('label');
divEmail.appendChild(clientEmail);
clientEmail.textContent = "@ : ";
clientEmail.className = 'form__email__label';

const clientEmailInput = document.createElement('input');
clientEmailInput.setAttribute("type","email");
divEmail.appendChild(clientEmailInput);
clientEmailInput.className = 'form__email__input';

// création de la partie adresse
const divAdresse = document.createElement('div');
form.appendChild(divAdresse);
divAdresse.className = 'form__adresse';

// ajout de l'adresse de livraison dans la partie adresse
const divRue = document.createElement('div');
divAdresse.appendChild(divRue);
divRue.className = 'form__adresse__block';

const clientRue = document.createElement('label');
divRue.appendChild(clientRue);
clientRue.textContent = "Adresse : "
clientRue.className = 'form__adresse__block__label';

const clientRueInput = document.createElement('textarea');
divRue.appendChild(clientRueInput);
clientRueInput.className = 'form__adresse__block__textarea';

// ajout de la ville dans la partie adresse
const divVille = document.createElement('div');
divAdresse.appendChild(divVille);
divVille.className = 'form__adresse__ville';

const clientVille = document.createElement('label');
divVille.appendChild(clientVille);
clientVille.textContent = "Ville : ";
clientVille.className = 'form__adresse__ville__label';

const clientVilleInput = document.createElement('input');
clientVilleInput.setAttribute("type","texte");
divVille.appendChild(clientVilleInput);
clientVilleInput.className = 'form__adresse__ville__input';

// ajout du code postal dans la partie adresse
const divCode = document.createElement('div');
divAdresse.appendChild(divCode);
divCode.className = 'form__adresse__code';

const clientCode = document.createElement('label');
divCode.appendChild(clientCode);
clientCode.textContent = "Code postal : ";
clientCode.className = 'form__adresse__code__label';

const clientCodeInput = document.createElement('input');
clientCodeInput.setAttribute("type","texte");
divCode.appendChild(clientCodeInput);
clientCodeInput.className = 'form__adresse__code__input';

// ajout du button de validation
const divVald = document.createElement('div');
form.appendChild(divVald);
divVald.className = 'form__divbutton';

const butVald = document.createElement('button');
divVald.appendChild(butVald);
butVald.textContent = "Valider votre commande";
butVald.className = 'form__divbutton__add';


























/*
// création de la div pour une cam
const camDiv = document.createElement('div');
divPanier.appendChild(camDiv);

// création du p pour le nom de la cam
const camName = document.createElement('p');
camDiv.appendChild(camName);
*/