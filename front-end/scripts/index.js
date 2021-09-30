main()

async function main() {
  const articles = await getArticles()
  console.log(articles)
  /* boucle pour aficher tout les articles */
  for (article of articles){
    displayArticle(article)
  }
  
} 

/* recuteration des articles depuit API */
function getArticles() {
  /* fetch va chercher les infos */
  return fetch("http://localhost:3000/api/cameras")
  .then(function(res) {
    /* transformation en json */
    return res.json()
  })
  /* recuteration des articles */
  .then(function(articles) {
    return articles
  })
  /* affichage d'une error */
  .catch(function(error) {
    alert(error)
  })
}

/* affichage des articles */
function displayArticle(article) {
  /* recuteration de l'éllement */
  const templateElt = document.getElementById("templateArticle")
  /* creation du clone */
  const cloneElt = document.importNode(templateElt.content, true)

  /* ajouter les informations recuperer dans API dans les clones */
  cloneElt.getElementById("product__img").src = article.imageUrl
  cloneElt.getElementById("product__name__titre").textContent = `Nom de l'article :`
  cloneElt.getElementById("product__info__name").textContent = article.name
  cloneElt.getElementById("product__price__titre").textContent = `Prix :`
  cloneElt.getElementById("product__info__price").textContent = article.price+` €`
  cloneElt.getElementById("product__card").href += `?id=${article._id}`

  /* integration du clone dans le HTML */
  document.getElementById("products").appendChild(cloneElt)
  
}