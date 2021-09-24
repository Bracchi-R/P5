main()

async function main() {
    const articleId = getArticleId()
    const article = await getArticle(articleId)
    console.log(article)
    hydrateArticle(article)
  }
  


function getArticleId() {
    return new URL(location.href).searchParams.get("id")
}

function getArticle(articleId) {
    return fetch(`http://localhost:3000/api/cameras/${articleId}`)
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

function hydrateArticle(article) {
    document.getElementById("product__img").src = article.imageUrl
    document.getElementById("product__info__name").textContent = article.name
    document.getElementById("product__info__description").textContent = article.description
    document.getElementById("product__info__price").textContent = article.price
}