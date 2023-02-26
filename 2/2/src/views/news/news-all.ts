import { News } from 'src/news/news.service';
import { zip } from 'rxjs';

export function renderNewsAll(news: News[]) {
  const newsListHtml = '';
  for (const newsItem of news) {
    html += renderNewsBlock(newsItem);
  }
  return `<h1> Список новостей</h1>
  ${newsListHtml}`;
}
function renderNewsBlock(news: News) {
  `
<div class="card">
  <div class="card-header"${news.cover}>
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">${news.title}</h5>
    <p class="card-text">${news.autor}</p>
    <a href="#" class="btn btn-primary">${news.discription}</a>
  </div>
</div>
Заголовки ка`;
}
