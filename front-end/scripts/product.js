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

    // création de la div de L'article
    const info = document.createElement('div');
    cam.appendChild(info);

    // ajout de l'image à la div 
    const img = document.createElement('img');
    info.appendChild(img);
    img.setAttribute('src', article.imageUrl);

    // création div des detail de l'article
    const detail = document.createElement('div');
    info.appendChild(detail);

    // ajout la description aux details
    const description = document.createElement('p');
    detail.appendChild(description);
    description.textContent = article.description;

    // creation de la boucle pour les diferents option dans les details
    let type = document.createElement('select');
    detail.appendChild(option);
    for (let i = 0; i < article.lenses.length; i++) {
        let option = document.createElement("option");
        option.innerText = article.lenses[i];
        type.appendChild(option);
    }

    // ajout du prix aux details
    const price = document.createElement('p');
    detail.appendChild(price);
    price.textContent = article.price + " €";
    
  }
  
