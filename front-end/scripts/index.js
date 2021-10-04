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
  const camsDiv = document.getElementById('products');

  //création section "cam"
  const camsSection = document.createElement('section');
  camsDiv.appendChild(camsSection);
  camsSection.className = 'cam';

  //création du lien vers produit.html pour chaque article
  const link = document.createElement("a");
  link.href = "product.html?id=" + article._id;
  camsSection.appendChild(link);
  link.className = 'cam__card"';

  //création image 
  const img = document.createElement('img');
  link.appendChild(img);
  img.setAttribute('src', article.imageUrl);

  //création div Ref
  const ref = document.createElement('div');
  link.appendChild(ref);
  ref.className = 'ref';

  //création h4 de Ref pour aficher le nom
  const name = document.createElement('h4');
  ref.appendChild(name);
  name.textContent = article.name;

  //création p de Ref pour afficher le prix
  const price = document.createElement('p');
  ref.appendChild(price);
  price.textContent = article.price + " €";
  
}