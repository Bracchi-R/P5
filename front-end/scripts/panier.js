//récupération des données du localStorage
let storedCams = JSON.parse(localStorage.getItem('newArticle'));
console.log(storedCams);

// recuperation ID de chaque produit
let camId = [];
for (i=0; i<storedCams.length; i++) {
    camId.push(storedCams[i].camId);
    console.log(camId[i]);
};

// création du panier
const divPanier = document.getElementById('panier');
const total = document.getElementById('total');

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
         camPrice.textContent = storedCam.camPrice + " €";

         /*
        // // création du boutton sup de l'article
        const camSup = document.createElement('button');
         camDiv.appendChild(camSup);
         camSup.textContent = "sup";
         camSup.setAttribute("id","cam__sup");
*/
       /*
     // on récupére l'article associé au bouton sup et suppresion de l'article
    let btnSup = document.querySelectorAll('#cam__sup');
    console.log(btnSup);
    for (let i = 0; i < btnSup.length; i++) {
        btnSup[i].addEventListener('click', function(event){

            // empêche le rafraîchir la page au clic
            event.preventDefault();  
        });
       
    };
 */ 

    }



    // création du prix total de la commande

    let total = []
    for (storedCam of storedCams) {
        let totalCam = storedCam.camPrice;
        total.push(totalCam);
    };

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const totalPrice = total.reduce(reducer, 0);

    const priceTotal = document.createElement('div');
    divPanier.appendChild(priceTotal);
    priceTotal.className = 'panier__total';
    priceTotal.textContent = "Le total de votre commande est de : " + totalPrice + " €";
    
    // création du bouton vide panier
    const suppanier = document.getElementById('suppanier');
    const boutonSup = document.createElement('button');
    suppanier.appendChild(boutonSup);
    boutonSup.textContent = "vider votre Panier";


    boutonSup.addEventListener("click", function (event) {
        event.preventDefault();
        localStorage.clear();
        alert('Votre panier a bien été vidé !')
        window.location.href = "panier.html";
    });

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
    form.id = 'form';

    // ajout du prenom au formulaire
    const divFirstName = document.createElement('div');
    form.appendChild(divFirstName);
    divFirstName.className = 'form__prenom';

    const clientFirstName = document.createElement('label');
    divFirstName.appendChild(clientFirstName);
    clientFirstName.textContent = "Prenom : ";
    clientFirstName.className = 'form__prenom__label';
    clientFirstName.setAttribute('for', 'prénom');

    const clientFirstNameInput = document.createElement('input');
    clientFirstNameInput.setAttribute("type","texte");
    divFirstName.appendChild(clientFirstNameInput);
    clientFirstNameInput.className = 'form__prenom__input';
    clientFirstNameInput.setAttribute('name', 'prénom');

    // ajout du nom au formulaire
    const divLastName = document.createElement('div');
    form.appendChild(divLastName);
    divLastName.className = 'form__nom';

    const clientLastName = document.createElement('label');
    divLastName.appendChild(clientLastName);
    clientLastName.textContent = "Nom : ";
    clientLastName.className = 'form__nom__label';
    clientLastName.setAttribute('for', 'nom');

    const clientLastNameInput = document.createElement('input');
    clientLastNameInput.setAttribute("type","texte");
    divLastName.appendChild(clientLastNameInput);
    clientLastNameInput.className = 'form__nom__input';
    clientLastNameInput.setAttribute('name', 'nom');

    // ajout de email
    const divEmail = document.createElement('div');
    form.appendChild(divEmail);
    divEmail.className = 'form__email';

    const clientEmail = document.createElement('label');
    divEmail.appendChild(clientEmail);
    clientEmail.textContent = "@ : ";
    clientEmail.className = 'form__email__label';
    clientEmail.setAttribute('for', 'email');

    const clientEmailInput = document.createElement('input');
    clientEmailInput.setAttribute("type","email");
    divEmail.appendChild(clientEmailInput);
    clientEmailInput.className = 'form__email__input';
    clientEmailInput.setAttribute('name', 'email');

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
    clientRue.setAttribute('for', 'rue');

    const clientRueInput = document.createElement('textarea');
    divRue.appendChild(clientRueInput);
    clientRueInput.className = 'form__adresse__block__textarea';
    clientRueInput.setAttribute('name', 'rue');

    // ajout de la ville dans la partie adresse
    const divVille = document.createElement('div');
    divAdresse.appendChild(divVille);
    divVille.className = 'form__adresse__ville';

    const clientVille = document.createElement('label');
    divVille.appendChild(clientVille);
    clientVille.textContent = "Ville : ";
    clientVille.className = 'form__adresse__ville__label';
    clientVille.setAttribute('for', 'ville');

    const clientVilleInput = document.createElement('input');
    clientVilleInput.setAttribute("type","texte");
    divVille.appendChild(clientVilleInput);
    clientVilleInput.className = 'form__adresse__ville__input';
    clientVilleInput.setAttribute('name', 'ville');

    // ajout du code postal dans la partie adresse
    const divCode = document.createElement('div');
    divAdresse.appendChild(divCode);
    divCode.className = 'form__adresse__code';

    const clientCode = document.createElement('label');
    divCode.appendChild(clientCode);
    clientCode.textContent = "Code postal : ";
    clientCode.className = 'form__adresse__code__label';
    clientCode.setAttribute('for', 'code');

    const clientCodeInput = document.createElement('input');
    clientCodeInput.setAttribute("type","texte");
    divCode.appendChild(clientCodeInput);
    clientCodeInput.className = 'form__adresse__code__input';
    clientCodeInput.setAttribute('name', 'code');

    // ajout du button de validation
    const divVald = document.createElement('div');
    form.appendChild(divVald);
    divVald.className = 'form__divbutton';

    const butVald = document.createElement('button');
    divVald.appendChild(butVald);
    butVald.textContent = "Valider votre commande";
    butVald.className = 'form__divbutton__add';
    butVald.id = 'form__divbutton__add';
    butVald.type = 'submit';
    butVald.name = 'add';

    // Envoi de la requête POST au back-end 
    form.addEventListener("click", () => {
        let data = {
            contact:{
            firstName: clientFirstNameInput.value,
            lastName: clientLastNameInput.value,
            address: clientRueInput.value,
            city: clientVilleInput.value,
            code: clientCodeInput.value,
            email: clientEmailInput.value,
            },
            
            products: camId,
            pricetotal: totalPrice,
           
        
        }
        console.log(data);
/*
        // envoie du prix total au localStorage
        localStorage.setItem('totalPrice', totalPrice);
        const storagePrice = localStorage.getItem('totalPrice');
        console.log(storagePrice);



        let storedContact = JSON.parse(localStorage.getItem('contact'));
        if(storedContact) {
            storedContact.push(contact);
            localStorage.setItem('contact', JSON.stringify(storedContact));
        } else {
            storedContact = [];
            storedContact.push(contact);
            localStorage.setItem('contact', JSON.stringify(storedContact));

        }*/

        // Création de l'entête de la requête
        const options = {
        method: "POST",
        body: JSON.stringify(order),
        headers: { "Content-Type": "application/json" },
        };

        fetch("http://localhost:3000/api/cameras/order", options)
        
            .then(function(res) {
                // transformation en json
                let responce =  res.json;
                
                
                //console.log("vnevoeveiovneo",res);
              })

            
            
              
              
              // affichage d'une error
              .catch(function(error) {
                alert(error)
              })





              

      
      

    });
    
    
     
};




























/*
// création de la div pour une cam
const camDiv = document.createElement('div');
divPanier.appendChild(camDiv);

// création du p pour le nom de la cam
const camName = document.createElement('p');
camDiv.appendChild(camName);
*/