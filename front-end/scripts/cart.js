main()

async function main() {
    const articleId = getArticleId()
    const article = await getArticle(articleId)
    console.log(article)
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
  cloneElt.getElementById("product__img").src = article.imageUrl
  cloneElt.getElementById("product__info__name").textContent = article.name
  cloneElt.getElementById("product__info__description").textContent = article.description
  cloneElt.getElementById("product__info__price").textContent = article.price

  /* integration du clone dans le HTML */
  document.getElementById("products").appendChild(cloneElt)
  
}






/*
function hydrateArticle(article) {
    document.getElementById("product__img").src = article.imageUrl
    document.getElementById("product__info__name").textContent = article.name
    document.getElementById("product__info__description").textContent = article.description
    document.getElementById("product__info__price").textContent = article.price
}
*/