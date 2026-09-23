let articles = document.querySelector(".layout__articles");

let post = [
  {
    title: "Articulo 1",
    date: "30/12/2018",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque dolorum eligendi, esse ducimus, cum provident expedita a obcaecati officiis qui natus, veniam odit! Cum hic optio doloribus",
  },
  {
    title: "Articulo 2",
    date: "30/12/2018",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque dolorum eligendi, esse ducimus, cum provident expedita a obcaecati officiis qui natus, veniam odit! Cum hic optio doloribus",
  },
  {
    title: "Articulo 3",
    date: "30/12/2018",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque dolorum eligendi, esse ducimus, cum provident expedita a obcaecati officiis qui natus, veniam odit! Cum hic optio doloribus",
  },
  {
    title: "Articulo 4",
    date: "30/12/2018",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque dolorum eligendi, esse ducimus, cum provident expedita a obcaecati officiis qui natus, veniam odit! Cum hic optio doloribus",
  },
  {
    title: "Articulo 5",
    date: "30/12/2018",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque dolorum eligendi, esse ducimus, cum provident expedita a obcaecati officiis qui natus, veniam odit! Cum hic optio doloribus",
  },
];

post.forEach((article) => {
  articles.innerHTML += `
        <article class="articles__articles">
          <h3 class="article__title">${article.title}</h3>
          <span class="article__date">${article.date}</span>
          <p class="article__body">
            ${article.body}
          </p>
          <a href="#" class="article__btl">Leer Mas...</a>
        </article> `;
});
