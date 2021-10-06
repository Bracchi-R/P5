main()

async function main() {
    const articleId = getArticleId()
    const article = await getArticle(articleId)
    hydrateArticle(article)
  }

function getArticleId() {
  /* recuteration de ID */
    return new URL(location.href).searchParams.get("id")
}

function getArticle(articleId) {
    return fetch(`http://localhost:3000/api/cameras/${articleId}`)
    .then(function(res) {
      return res.json()
    })
    .then(function(article) {
      return article
    })
    .catch(function(error) {
      alert(error)
    })
  }


/* affichage de l'articles */
function hydrateArticle(article) {
    // recuteration de l'éllement
    const cam = document.getElementById("carte")

     // création h3 de la page avec le nom de l'article
    const name = document.createElement('h3');
    cam.appendChild(name);
    name.textContent = article.name;
    name.className = 'carte__name';

    // création de la div de L'article
    const info = document.createElement('div');
    cam.appendChild(info);
    info.className = 'carte__article';

    // ajout de l'image à la div 
    const img = document.createElement('img');
    info.appendChild(img);
    img.setAttribute('src', article.imageUrl);
    img.className = 'carte__article__img';

    // création div des detail de l'article
    const detail = document.createElement('div');
    info.appendChild(detail);
    detail.className = 'carte__article__detail';

    // ajout la description aux details
    const description = document.createElement('p');
    detail.appendChild(description);
    description.textContent = "Description : " + article.description;
    description.className = 'carte__article__detail__description';

    // creation de la div option
    const divOption = document.createElement('div');
    detail.appendChild(divOption);
    divOption.className = 'carte__article__detail__option';

    // creation du label
    const nameSelect = document.createElement('label');
    divOption.appendChild(nameSelect);
    nameSelect.className = 'carte__article__detail__option__name';
    nameSelect.textContent = "Choix objectif : "

    // creation de la boucle pour les diferents option dans les details
     let type = document.createElement('select');
     divOption.appendChild(type);
     for (let i = 0; i < article.lenses.length; i++) {
         let option = document.createElement("option");
         option.innerText = article.lenses[i];
         type.appendChild(option);
     }

    // ajout du prix aux details
    const price = document.createElement('p');
    detail.appendChild(price);
    price.textContent = "Prix : " + article.price + " €";
    price.className = 'carte__article__detail__price';
    
    // création de la div button
    const button = document.createElement('div');
    cam.appendChild(button);
    button.className = 'carte__button';

    // création du boutton ajouter au panier
    const add = document.createElement('button');
    button.appendChild(add);
    add.textContent = "Ajouter au panier";
    add.className = 'carte__button__add';

    /* envoi dans le storage au click */
    add.addEventListener("click", () => {
      let data = {
        camName: article.name,
        camId: article._id,
      };

      let storedCams = JSON.parse(localStorage.getItem('newArticle'));
      if(storedCams) {
        storedCams.push(data);
        localStorage.setItem('newArticle', JSON.stringify(storedCams));
      } else {
        storedCams = [];
        storedCams.push(data);
        localStorage.setItem('newArticle', JSON.stringify(storedCams));

      }

    });
  }
  
