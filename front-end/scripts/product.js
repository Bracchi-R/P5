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
  /* recuteration de l'éllement */
  const templateElt = document.getElementById("templateArticle")
  /* creation du clone */
  const cloneElt = document.importNode(templateElt.content, true)

  /* ajouter les informations recuperer dans API dans les clones */
  cloneElt.getElementById("carte__img").src = article.imageUrl
  cloneElt.getElementById("carte__name__titre").textContent = `Nom :`
  cloneElt.getElementById("carte__info__name").textContent = article.name
  cloneElt.getElementById("carte__description__titre").textContent = `Description :`
  cloneElt.getElementById("carte__info__description").textContent= article.description
  cloneElt.getElementById("carte__price__titre").textContent = `Prix :`
  cloneElt.getElementById("carte__info__price").textContent= article.price+` €/UT`
  cloneElt.getElementById("objectif__titre").textContent = `Type :`

  /* creation de la boucle pour les diferents option */
  let type = cloneElt.getElementById("objectif");
      for (let i = 0; i < article.lenses.length; i++) {
        let option = document.createElement("option");
        option.innerText = article.lenses[i];
        type.appendChild(option);
      }

  cloneElt.getElementById("carte__nombre__titre").textContent = `Quantité :`

  let nomb = cloneElt.getElementById("nombre__choix");
  let nombre = 0;
      for (let i = 0; i < nombre; i++) {
        let option = document.createElement("option");
        option.innerText = nombre[i];
        type.appendChild(option);
      }
  
  cloneElt.getElementById("add").textContent = `Ajouter au panier`
  
  /* integration du clone dans le HTML */
  document.getElementById("carte").appendChild(cloneElt)
  

/* localStorage */
/* recuperation du button */
let btn = document.getElementById("add");
console.log(btn);

/* envoi dans le storage au click */
btn.addEventListener("click", () => {
  
  
  localStorage.setItem("nom", document.getElementById("carte__info__name").textContent);
  localStorage.setItem("type", "aaa");
  localStorage.setItem("nombre","bbb");
  localStorage.setItem("prix", document.getElementById("carte__info__price").textContent);

  
})















}















