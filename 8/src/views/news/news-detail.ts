import { News } from '../../news/news.service';
export function renderNewsDetail(news: News, comments: Comment[]): string {
    return `
  <div class="container">
  <img src=""${news.cover} alt="">
     <h1>${news.title}</h1>
     <div>${news.discription} </div>
     <div class="test-muted"> ${news.autor}</div>
     ${renderNewsComments(comment)}
  </div> 
  `;
}

export function renderNewsComments(comments: Comment[]): string {
    let html = ''
    for (const comment of comments) {


        html += `
    <div class="row">
      <div class="col-lg-2"> 
      <img src="..." alt="..." class="rounded-lg">
      </div> 
       <div class="col-lg-8"> 
         <div class > ${comment.autor} </div> 
       <div class > ${comment.message} </div> 
      </div> 
    </div> 
    `;
    }
    return html;
}