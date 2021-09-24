main()

async function main() {
  const articles = await getArticles()

  for (article of articles){
    displayArticle(article)
  }
  
} 

function getArticles() {
  return fetch("http://localhost:3000/api/cameras")
  .then(function(res) {
    return res.json()
  })
  .then(function(articles) {
    return articles
  })
  .catch(function(error) {
    alert(error)
  })
}

function displayArticle(article) {
  const templateElt = document.getElementById("templateArticle")
  const cloneElt = document.importNode(templateElt.content, true)

  
  cloneElt.getElementById("product__info__name").textContent = article.name
  cloneElt.getElementById("product__info__price").textContent = article.price
  cloneElt.getElementById("product__card").href += `${article._id}`

  document.getElementById("products").appendChild(cloneElt)
  
}