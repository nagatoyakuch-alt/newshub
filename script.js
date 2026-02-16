const API = "/api/articles";

// Carregar artigos
async function loadArticles() {
  const res = await fetch(API);
  const articles = await res.json();
  displayArticles(articles);
}

function displayArticles(articles) {
  const container = document.getElementById("articles");
  if (!container) return;
  container.innerHTML = "";

  articles.forEach(article => {
    container.innerHTML += `
      <div class="article-card">
        <h2>${article.title}</h2>
        <img src="${article.image}" />
        <p>${article.content.substring(0, 100)}...</p>
        <a href="article.html?id=${article._id}">Ler mais</a>
      </div>
    `;
  });
}

// Filtrar por categoria
function filterCategory(category) {
  fetch(API)
    .then(res => res.json())
    .then(articles => {
      const filtered = articles.filter(a => a.category === category);
      displayArticles(filtered);
    });
}

loadArticles();